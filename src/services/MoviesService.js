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
  async getMovieById(movieId) {
    AppState.activeMovie = null // before you try to load the new one, get rid of the old one
    const response = await movieApi.get(`movie/${movieId}`)
    console.log('🐒👑📡', response.data);
    const movie = new Movie(response.data)
    AppState.activeMovie = movie
  }
  async clearSearch() {
    AppState.searchingFor = null
    await this.discoverMovies()
  }
  async searchMovies(searchTerm) {
    const response = await movieApi.get(`search/movie?query=${searchTerm}`)
    console.log('🔍🎞️📡', response.data);
    const searchedMovies = response.data.results.map(movieData => new Movie(movieData))
    AppState.searchingFor = searchTerm
    AppState.movies = searchedMovies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }
  async changePage(pageNumber) {
    const response = await movieApi.get(`discover/movie?page=${pageNumber}`)
    console.log('📃🎞️📡', response.data);
    const movies = response.data.results.map(movieData => new Movie(movieData))
    AppState.movies = movies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }
  async changePageV2(url) {
    const response = await movieApi.get(url)
    console.log('📃🎞️📡 ✌️', response.data);
    const movies = response.data.results.map(movieData => new Movie(movieData))
    AppState.movies = movies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }

  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    console.log('🎞️📡', response.data);
    const movies = response.data.results.map(movieData => new Movie(movieData))
    console.log('🍿', movies);
    AppState.movies = movies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }

}

export const moviesService = new MoviesService()
