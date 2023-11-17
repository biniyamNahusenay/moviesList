import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi"
import { ApiKey } from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async ()=>{
      const movieText = "Harry"
      const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
        return res.data
    }
)
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async ()=>{
  const seriesText = "Friends"
  const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${seriesText}&type=series`)
    return res.data
}
)
export const fetchAsyncDetails = createAsyncThunk("movies/fetchAsyncDetails", async (id)=>{
  const res = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`)
    return res.data
}
)

const initialState = {
    movies:{},
    shows:{},
    details:{}
}

const movieSlice = createSlice({
  name:"movies",
  initialState,
  reducers:{
    addMovies:(state,{payload})=>{
        state.movies = payload;
    }
  },
  extraReducers:{
    [fetchAsyncMovies.pending]:()=>{
      console.log("pending")
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
      console.log("fetched sucessful")
      return{...state,movies:payload}
    },
    [fetchAsyncMovies.rejected]:()=>{
      console.log("rejected")
    },
    [fetchAsyncShows.fulfilled]:(state,{payload})=>{
      console.log("fetched sucessful")
      return{...state,shows:payload}
    },
    [fetchAsyncDetails.fulfilled]:(state,{payload})=>{
      console.log("fetched sucessful")
      return{...state,details:payload}
    }
  }
})

export const {addMovies} = movieSlice.actions
export const getAllMovies = (state)=>state.movies.movies
export const getAllShows = (state)=>state.movies.shows
export const getAllDetails = (state)=>state.movies.details 
export default movieSlice.reducer;