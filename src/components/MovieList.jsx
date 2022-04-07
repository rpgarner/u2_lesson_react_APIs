import { POSTER_PATH } from '../globals'

function MovieList(props) {

    return (
       props.movies.map((movie) => (
            <div key={movie.id} className="card">
              <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
              <h3>{movie.title}</h3>
              <button onClick={() => props.chooseMovie(movie.ID)}>View Movie</button>
            </div>
          ))
    )
}

export default MovieList