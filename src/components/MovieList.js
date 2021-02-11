import React, { Component } from 'react'
import { POSTER_PATH } from '../globals'

export default class MovieList extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
            <h3>{movie.title}</h3>
            <button onClick={() => this.props.selectMovie(movie.id)}>
              View Movie
            </button>
          </div>
        ))}
      </div>
    )
  }
}
