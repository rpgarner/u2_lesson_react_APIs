import './styles/App.css'
import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL, axiosConfig } from './globals'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: null // Should be movie id once state sets
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/discover/movie`, axiosConfig)
    this.setState({ movies: res.data.results })
  }

  selectMovie = (movieId) => {
    this.setState({ selectedMovie: movieId })
  }

  clearMovie = () => {
    this.setState({ selectedMovie: null })
  }

  render() {
    return (
      <div>
        {this.state.selectedMovie ? (
          <MovieDetails
            movieId={this.state.selectedMovie}
            goBack={this.clearMovie}
          />
        ) : (
          <MovieList
            movies={this.state.movies}
            selectMovie={this.selectMovie}
          />
        )}
      </div>
    )
  }
}
