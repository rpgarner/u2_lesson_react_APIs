import axios from 'axios'
import React, { Component } from 'react'
import { axiosConfig, BASE_URL, POSTER_PATH } from '../globals'

export default class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: props.movieId,
      movieDetails: null // Will be movie object
    }
  }
  async componentDidMount() {
    const res = await axios.get(
      `${BASE_URL}/movie/${this.state.movieId}`,
      axiosConfig
    )
    this.setState({ movieDetails: res.data })
  }

  render() {
    if (this.state.movieDetails) {
      return (
        <div className="details">
          <button onClick={this.props.goBack}>Go Back</button>
          <div className="content card">
            <img
              src={`${POSTER_PATH}${this.state.movieDetails.backdrop_path}`}
              alt="poster"
            />
            <h2>{this.state.movieDetails.title}</h2>
            <h4>{this.state.movieDetails.tagline}</h4>
            <p>{this.state.movieDetails.overview}</p>
            <h5>Rating: {this.state.movieDetails.vote_average}/10</h5>
            <h5>Duration: {this.state.movieDetails.runtime} mins</h5>
          </div>
        </div>
      )
    }
    return <div>Loading...</div>
  }
}
