<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieSlider from "./MovieSlider.vue";

const all = ref<Movie[]>([]);
const movies = ref<Movie[]>([]);
const series = ref<Movie[]>([]);
const people = ref<Movie[]>([]);

const getTrendingAll = async () => {
  const { results } = await Movies.getTrendingMovies();
  all.value = results;
}

const getTrendingMovies = async () => {
  const { results } = await Movies.getTrendingMovies('movie');
  movies.value = results;
}

const getTrendingSeries = async () => {
  const { results } = await Movies.getTrendingMovies('tv');
  series.value = results;
}

const getTrendingPerson = async () => {
  const { results } = await Movies.getTrendingMovies('person');
  people.value = results;
}

onMounted(async () => {
  await getTrendingAll();
  await getTrendingMovies();
  await getTrendingSeries();
  await getTrendingPerson();
});
</script>
<template>
  <div class="">
    <MovieSlider :movies="all" title="Trending" type="poster" />
    <MovieSlider :movies="movies" title="Movies" type="wide" />
    <MovieSlider :movies="series" title="Series" type="wide" />
    <MovieSlider :movies="people" title="Actors" type="person" />
  </div>
</template>
<style scoped>
</style>
