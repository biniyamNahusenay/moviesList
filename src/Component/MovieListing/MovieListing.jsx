import { useSelector } from "react-redux"
import "./movieListing.scss"
import { getAllMovies,getAllShows } from "../../features/Slices/movieSlice"
import MovieCard from "../MovieCard/MovieCard"
import "../MovieListing/movieListing.scss"

const MovieListing = () => {
  const allmovies = useSelector(getAllMovies)
  const allShows = useSelector(getAllShows)
  let renderMovies,renderShows = ""
  
  renderMovies =
  allmovies.Response === "True" ? (
    allmovies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{allmovies.Error}</h3>
    </div>
  );

  renderShows =
  allShows.Response === "True" ? (
    allShows.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{allShows.Error}</h3>
    </div>
  );
  
  return (
    <div className="movie-wrapper">
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="movie-container">{renderMovies}</div>
    </div>
    <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div> 
  </div>
  )
}

export default MovieListing
