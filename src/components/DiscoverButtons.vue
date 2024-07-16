<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { moviesService } from '../services/MoviesService.js';
import Pop from '../utils/Pop.js';

const currentPage = computed(()=> AppState.currentPage)
const totalPages = computed(()=> AppState.totalPages)
const searchingFor = computed(()=> AppState.searchingFor)

async function changePage(pageNumber){
  try {
    console.log(pageNumber);
    await moviesService.changePage(pageNumber)
  } catch (error) {
    console.error(error)
    Pop.toast("Could not change page", 'error')
  }
}

async function changePageV2(url){
  try {
    console.log('changing to', url);
    await moviesService.changePageV2(url)
  } catch (error) {
    console.error(error)
    Pop.toast("Could not change page", 'error')
  }
}

</script>


<template>
<section v-if="!searchingFor" class="row justify-content-between my-2">
  <button :disabled="currentPage == 1" class="col-3 btn btn-primary" @click="changePage(currentPage-1)"><i class="mdi mdi-arrow-left"></i> Previous</button>
  <div class="col-3 text-center fw-bold">{{currentPage}} of {{ totalPages }}</div>
  <button :disabled="currentPage == totalPages" @click="changePage(currentPage+1)" class="col-3 btn btn-primary">Next<i class="mdi mdi-arrow-right"></i></button>
</section>

<section v-else class="row justify-content-between my-2">
  <button :disabled="currentPage == 1" class="col-3 btn btn-info" @click="changePageV2(`search/movie?query=${searchingFor}&page=${currentPage-1}`)"><i class="mdi mdi-arrow-left"></i> Previous</button>
  <div class="col-3 text-center fw-bold">{{currentPage}} of {{ totalPages }}</div>
  <button :disabled="currentPage == totalPages" @click="changePageV2(`search/movie?query=${searchingFor}&page=${currentPage+1}`)" class="col-3 btn btn-info">Next<i class="mdi mdi-arrow-right"></i></button>
</section>
</template>


<style lang="scss" scoped>

</style>
