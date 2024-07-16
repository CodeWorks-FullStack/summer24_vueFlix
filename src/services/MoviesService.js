import axios from "axios"
import { Movie } from "../models/Movie.js";
import { AppState } from "../AppState.js";

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '545c6ef058e65396849dfbbf381cbca3'
  }
})


class MoviesService {

  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    console.log('🎞️📡', response.data);
    const movies = response.data.results.map(movieData => new Movie(movieData))
    console.log('🍿', movies);
    AppState.movies = movies
  }

}

export const moviesService = new MoviesService()
