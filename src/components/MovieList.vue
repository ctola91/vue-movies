<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieListItem from "./MovieListItem.vue";

const movies = ref<Movie[]>([]);
const url = Movies.imageURL;

onMounted(async () => {
  const res = await Movies.getTrendingMovies();

  const { results } = res;
  movies.value = results;
});
</script>
<template>
  <div class="movie-list-section">
    <h2>Trending Movies</h2>
    <div class="movie-list-container">
      <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
<style scoped>
.movie-list-section {
  @apply flex flex-col items-center;
}
.movie-list-section h2 {
  @apply text-2xl;
}
.movie-list-container h2 {
  @apply text-2xl m-3;
}
.movie-list-container {
  @apply flex flex-col px-5;
}
</style>
