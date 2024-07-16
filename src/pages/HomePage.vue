<script setup>
import {computed, onMounted} from 'vue'
import {moviesService} from '../services/MoviesService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import MovieCard from '../components/MovieCard.vue'
import DiscoverButtons from '../components/DiscoverButtons.vue'
// NOTE pages are responsible for "Getting" the data they want to display

const movies = computed(()=> AppState.movies)

onMounted(()=>{
  discoverMovies()
})

async function discoverMovies(){
  try {
    await moviesService.discoverMovies()
  } catch (error) {
    console.error(error)
    Pop.toast("could not discover movies ☹️", 'error')
  }
}

</script>

<template>
  <h1 class="text-primary fw-bold text-center">
    Welcome to 🍿 Vue-Flix 🎞️
  </h1>
  <DiscoverButtons/>
  <section class="row g-1">

    <!-- {{ movies }} -->

    <div v-for="movie in movies" :key="movie.id" class="col-6 col-md-4 col-lg-3">
      <!-- {{ movie.title }} -->
        <!-- NOTE :movie is the name of the prop we are passing data to, =movie, is the data being passed (Argument) -->
      <MovieCard :movie="movie"/>
      <!-- <div class="card">
        <img class="card-img img-fluid" :src="movie.poster" :alt="`movie poster for ${movie.title}`">
        <div class="card-body">
          <p class="fs-4 card-title text-center fw-bold text-primary">{{ movie.title }}</p>
          <p class="text-end fw-bold m-0">
            <span>{{ movie.reviewScore.toFixed(1) }} <i class="mdi mdi-star"></i></span>
          </p>
          <p>
            {{ movie.overview.slice(0, 35) }}...
          </p>
        </div>
      </div> -->
    </div>
  </section>
  <DiscoverButtons/>
</template>

<style scoped lang="scss"></style>
