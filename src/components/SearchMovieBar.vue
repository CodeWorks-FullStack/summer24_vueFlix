<script setup>
import { computed, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js';
import { AppState } from '../AppState.js';


const searchTerm = ref('')
const searchingFor = computed(()=> AppState.searchingFor)

async function searchMovies(){
  try {
    // NOTE when working with vue's methods, they wrap the value in large reactive objects, These values need to be accessed here in the script if you want their value
    console.log('searing🔍', searchTerm.value);
    await moviesService.searchMovies(searchTerm.value)
    searchTerm.value = ''
  } catch (error) {
    console.error(error);
    Pop.toast("could not complete search", 'error')
  }
}

async function clearSearch(){
  try {
    await moviesService.clearSearch()
  } catch (error) {
    console.error(error);
    Pop.toast("could not clear search results", 'error')
  }
}

</script>


<template>
  <form @submit.prevent="searchMovies()">
    <div class="input-group rounded-pill">
      <!-- NOTE v-model is a 2-WAY data bind. data from the ref, shows up here, and if the data here changes, the ref changes too -->
      <input v-model="searchTerm" type="text" class="form-control"/>
      <!-- NOTE         ⬆️ the .value does not need to accessed here, because vue "unwraps" the extra layers in the 'template' -->
      <button class="btn btn-info px-3"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
  <section class="text-start">
    <div v-if="searchingFor" class="bg-light p-2 px-3 rounded-pill d-inline fs-5 fw-normal text-dark">searching for: {{ searchingFor }} <button @click="clearSearch()" class="btn"><i class="mdi mdi-close"></i></button></div>
  </section>
</template>


<style lang="scss" scoped>

</style>
