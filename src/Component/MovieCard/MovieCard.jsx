import "./movieCard.scss"
import {Link} from "react-router-dom"

const MovieCard = (prop) => {
  const {data} = prop
  return (
    <div className="card">
      <Link to={`/movie/${data.imdbID}`} className="Link">
       <div className="movieTop">
          <img src={data.Poster} alt={data.Title} />
       </div>
       <div className="movieBottom">
          <h2>{data.Title}</h2>
          <p>{data.Year}</p>
       </div>
    </Link>
    </div>
  )
}

export default MovieCard
