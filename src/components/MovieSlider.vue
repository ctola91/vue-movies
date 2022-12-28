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
  type: string;
}>();

const url = Movies.imageURL;
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>
<template>
  <div class="movie-list-section">
    <h2>{{ props.title }}</h2>
    <div class="movie-list-container">
      <Swiper
        :slides-per-view="'auto'"
        :space-between="20"
        navigation
        :scrollbar="{ draggable: true }"
        :modules="modules"
        @wswiper="onSwiper"
      >
        <SwiperSlide v-for="movie in props.movies" :key="movie.id">
          <MovieListItem :movie="movie" :type="type" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<style scoped>
.swiper-slide {
  @apply max-w-xs;
}
.movie-list-section {
  @apply flex flex-col items-start;
}
.movie-list-section h2 {
  @apply text-2xl px-5;
}
.movie-list-container h2 {
  @apply text-2xl m-3;
}
.movie-list-container {
  @apply px-5 md:px-10 lg:px-16 w-full;
}
</style>
