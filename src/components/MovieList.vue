<script setup lang="ts">
import Movies from "@/services/Movies";
import { onMounted, ref } from "vue";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const movies = ref<Movie[]>([]);
const url = Movies.imageURL;

onMounted(async () => {
  const res = await Movies.getTrendingMovies();

  const { results } = res;
  movies.value = results;
});
</script>
<template>
  <div>
    <h2>Trending Movies</h2>
    <div class="movie-container">
      <div v-for="movie in movies" :key="movie.id" class="movie-item">
        <img :src="`${url}/${movie.poster_path}`" />
        <span>{{ movie.title }}</span>
      </div>
    </div>
  </div>
</template>
<style>
.movie-container {
  display: flex;
  flex-wrap: wrap;
}
.movie-item {
  width: 300px;
}
.movie-item img {
    width: 100%;
    /* max-width: 100%; */
}
</style>
