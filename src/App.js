import './styles/App.css'
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: null // Should be movie id once state sets
    }
  }

  render() {
    return <div></div>
  }
}
