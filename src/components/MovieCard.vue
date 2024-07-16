<script setup>
import { Movie } from '../models/Movie.js';

// NOTE defineProps is a built in function that sets this COMPONENT up to take in data, LIKE A PARAMETER
// defineProps({movieTitle: String})
defineProps({movie: Movie})

</script>


<template>
<!-- Movie Card Vue 🖖🍿 -->
<div class="card">
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
      </div>
</template>


<style lang="scss" scoped>

</style>
