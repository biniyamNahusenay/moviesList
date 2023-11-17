import { useEffect } from "react"
import "./home.scss"
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from "react-redux"
//import { addMovies } from "../../features/Slices/movieSlice"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/Slices/movieSlice"

const Home = () => {
  //const movieText = "Harry"
  const dispatch = useDispatch()
   useEffect(()=>{
    // const fetchMovies = async ()=>{
    //   const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
    //   .catch(err=>{
    //     console.log(err);
    //   })
    //    dispatch(addMovies(res.data))
    // }
    // fetchMovies();
     
     dispatch(fetchAsyncMovies())
     dispatch(fetchAsyncShows())
  },[dispatch])
  return (
    <div className="home">
      <div className="bannerImg"></div>
      <MovieListing/>
    </div>
  )
}

export default Home
