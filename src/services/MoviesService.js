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
  async changePage(pageNumber) {
    const response = await movieApi.get(`discover/movie?page=${pageNumber}`)
    console.log('📃🎞️📡', response.data);
    const movies = response.data.results.map(movieData => new Movie(movieData))
    AppState.movies = movies
    AppState.currentPage = response.data.page
  }

  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    console.log('🎞️📡', response.data);
    const movies = response.data.results.map(movieData => new Movie(movieData))
    console.log('🍿', movies);
    AppState.movies = movies
    AppState.currentPage = response.data.page
  }

}

export const moviesService = new MoviesService()
