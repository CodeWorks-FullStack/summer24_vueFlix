<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { moviesService } from '../services/MoviesService.js';
import Pop from '../utils/Pop.js';

const currentPage = computed(()=> AppState.currentPage)


async function changePage(pageNumber){
  try {
    console.log(pageNumber);
    await moviesService.changePage(pageNumber)
  } catch (error) {
    console.error(error)
    Pop.toast("Could not change page", 'error')
  }
}

</script>


<template>
<section class="row justify-content-between my-2">
  <button :disabled="currentPage == 1" class="col-3 btn btn-primary" @click="changePage(currentPage-1)"><i class="mdi mdi-arrow-left"></i> Previous</button>
  <div class="col-3 text-center fw-bold">{{currentPage}}</div>
  <button @click="changePage(currentPage+1)" class="col-3 btn btn-primary">Next<i class="mdi mdi-arrow-right"></i></button>
</section>
</template>


<style lang="scss" scoped>

</style>
