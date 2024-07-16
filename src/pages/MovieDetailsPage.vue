<script setup>
import {computed, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import { moviesService } from '../services/MoviesService.js';
import { AppState } from '../AppState.js';

const route = useRoute()
const activeMovie = computed(()=> AppState.activeMovie)


onMounted(()=>{
  getMovieDetails()
})

async function getMovieDetails(){
  try {
    const movieId = route.params.movieId
    console.log('getting movie', movieId);
    await moviesService.getMovieById(movieId)
    // await
  } catch (error) {
    console.error(error);
  }
}

</script>


<template>
  <!-- NOTE cannot load the movie details like title and poster on load, cause when the app loads, activeMovie is null. The V-if, keeps all the properties from being accessed or rendered until they are here -->
  <div v-if="activeMovie">
    <section>{{ activeMovie.title }}</section>
    <section><img class="img-fluid" :src="activeMovie.poster" alt="">
      <p>{{activeMovie.overview}}</p>
    </section>
  </div>
</template>


<style lang="scss" scoped>

</style>
