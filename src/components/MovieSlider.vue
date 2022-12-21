<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieListItem from "./MovieListItem.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const props = defineProps<{
  movies: Movie[];
  title: string;
}>();

// const movies = ref<Movie[]>([]);
const url = Movies.imageURL;
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [Navigation, Pagination, Scrollbar, A11y];
// onMounted(async () => {
//   const res = await Movies.getTrendingMovies();

//   const { results } = res;
//   movies.value = results;
// });
</script>
<template>
  <div class="movie-list-section">
    <h2>{{ props.title }}</h2>
    <div class="movie-list-container">
      <Swiper
        :slides-per-view="3"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
      >
        <SwiperSlide v-for="movie in props.movies" :key="movie.id">
          <MovieListItem :movie="movie" />
        </SwiperSlide>
      </Swiper>
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
  @apply px-5 w-full;
}
</style>
