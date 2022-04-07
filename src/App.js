//token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTE5NTRjMjhjNDAwZmE4M2IzMjJiNmUwNjBhMWZhZiIsInN1YiI6IjYyMjI2Njk0NDFhYWM0MDA2Yzc1OGY4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xdL1uDlLHjXHOu7-lqkNd3_nLM5vzhEK1ry123T5ZCA
import axios, { Axios } from 'axios'
import './styles/App.css'
import { useState, useEffect }  from 'react'
import { BASE_URL } from './globals'
import MovieList from './components/MovieList'







const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      setMovies(res.data.results)
    }
    getMovies()
  })
  const chooseMovie = (movieID) => {
    setSelectedMovie(movieID)
  }


  return ( 
     <div>
       <MovieList 
       movies={movies}
       chooseMovie ={chooseMovie} 
        />
      
    </div>
  )
}

export default App
