<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieSlider from "./MovieSlider.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const all = ref<Movie[]>([]);
const movies = ref<Movie[]>([]);
const series = ref<Movie[]>([]);
const people = ref<Movie[]>([]);

const url = Movies.imageURL;
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [Navigation, Pagination, Scrollbar, A11y];

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
