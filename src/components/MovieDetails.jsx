import axios from "axios"
import { useState, useEffect } from "react"

import { BASE_URL } from '../globals'

function MovieDetails() {
    const [movieID, setMovieID] = useState('')
    const [movieDetails, setMovieDetails] = useState('')

    useEffect(() => {
        async function getMovieIDs() {
          const results = await axios.get(`${BASE_URL}/discover/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
          console.log(results)
        }
        getMovieIDs()
    }
    )}

export default MovieDetails