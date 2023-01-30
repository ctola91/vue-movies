<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieSlider from "./MovieSlider.vue";
import { useMovieStore } from '../stores/movies';
import { storeToRefs } from 'pinia';

const store = useMovieStore();

const { movies } = storeToRefs(store);

// const all = ref<Movie[]>([]);
// const movies = ref<Movie[]>([]);
// const series = ref<Movie[]>([]);
// const people = ref<Movie[]>([]);

// const getTrendingAll = async () => {
//   // const { results } = await Movies.getTrendingMovies();
//   // all.value = results;
// }

// const getTrendingMovies = async () => {
//   const { results } = await Movies.getTrendingMovies('movie');
//   movies.value = results;
// }

// const getTrendingSeries = async () => {
//   const { results } = await Movies.getTrendingMovies('tv');
//   series.value = results;
// }

// const getTrendingPerson = async () => {
//   const { results } = await Movies.getTrendingMovies('person');
//   people.value = results;
// }

onMounted(async () => {
  // await getTrendingAll();
  // await getTrendingMovies();
  // await getTrendingSeries();
  // await getTrendingPerson();
  store.getMovies();
});
</script>
<template>
  <div class="">
    <MovieSlider :movies="movies" title="Trending" type="poster" />
    <MovieSlider :movies="store.onlyMovies" title="Movies" type="wide" />
    <MovieSlider :movies="store.tvShows" title="Series" type="wide" />
    <!-- <MovieSlider :movies="people" title="Actors" type="person" /> -->
  </div>
</template>
<style scoped>
</style>
