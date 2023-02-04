<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieSlider from "./MovieSlider.vue";
import { useMovieStore } from "../../stores/movies";
import { storeToRefs } from "pinia";
import { usePeopleStore } from "../../stores/people";

const store = useMovieStore();
const peopleStore = usePeopleStore();

const { all, tvShows, movies } = storeToRefs(store);
const { people } = storeToRefs(peopleStore);

const getTrendingPerson = async () => {
  const { results } = await Movies.getTrendingMovies("person");
  people.value = results;
};

onMounted(async () => {
  await getTrendingPerson();
  store.getAll();
  store.getTvShows();
  store.getMovies();
});
</script>
<template>
  <div class="">
    <MovieSlider :movies="all" title="Trending" type="poster" />
    <MovieSlider :movies="movies" title="Movies" type="wide" />
    <MovieSlider :movies="tvShows" title="TV Shows" type="wide" />
    <MovieSlider :movies="people" title="Actors" type="person" />
  </div>
</template>
<style scoped></style>
