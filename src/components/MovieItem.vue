<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { reactive, computed } from "vue";

const url = Movies.imageURL;

const movie: Movie = reactive({
  id: 1,
  title: "First Movie",
  overview: "",
  media_type: "movie",
  vote_average: 3.5,
});
</script>
<template>
  <RouterLink :to="`/movies/${movie.id}?type=${movie.media_type}`" class="movie-item" v-if="movie !== undefined">
    <div class="movie-description">
      <h3>
        {{ movie.title }}
      </h3>
      <p>{{ movie.overview }}</p>
      <div>
        <font-awesome-icon
          icon="fa-solid fa-tv"
          v-show="movie.media_type === 'tv'"
        />
        <font-awesome-icon
          icon="fa-solid fa-film"
          v-show="movie.media_type === 'movie'"
        />
        - {{ movie.vote_average }}
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
.swiper-slide {
  @apply max-w-xs;
}
/* .movie-item {
  @apply max-w-sm;
} */
.movie-item h3 {
  @apply text-base;
}
.movie-item p {
  @apply text-sm;
}
/* .movie-item img {
  @apply max-w-xs;
} */
</style>
