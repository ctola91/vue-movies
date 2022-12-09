<script setup lang="ts">
import Movies from "@/services/Movies";
import { onMounted, ref } from "vue";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const movies = ref<Movie[]>([]);
onMounted(async () => {
  const res = await Movies.getTrendingMovies();

  const { results } = res;
  movies.value = results;
});
</script>
<template>
  <div>
    <h2>Trending Movies</h2>
    <div v-for="movie in movies" :key="movie.id">
      <img :src="movie.poster_path" />
      <span>{{ movie.title }}</span>
    </div>
  </div>
</template>
