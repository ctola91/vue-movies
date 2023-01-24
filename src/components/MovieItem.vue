<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";

const url = Movies.imageURL;

interface Props {
  movie?: Movie;
  type: string;
  title: string;
}

const props = defineProps<Props>();

</script>
<template>
  <div class="movie-description" v-if="movie">
    <div class="movie-container">
      <div class="image-container">
        <img :src="`${url}/${movie.poster_path}`" :alt="movie.title" />
      </div>
      <div class="movie-info">
        <h2 class="movie-title">
          {{ title }}
        </h2>
        <p>{{ movie.overview }}</p>
        <div>Votes: {{ movie.vote_average }}</div>
        <div>
          <h3>Details</h3>
          <table class="">
            <tbody>
              <tr v-if="movie.number_of_seasons">
                <td>Seasons</td>
                <td>{{ movie.number_of_seasons }}</td>
              </tr>
              <tr v-if="movie.number_of_episodes">
                <td>Episodes</td>
                <td>{{ movie.number_of_episodes }}</td>
              </tr>
              <tr v-if="movie.revenue">
                <td>Revenue</td>
                <td>{{ movie.revenue }}</td>
              </tr>
              <tr v-if="movie.budget">
                <td>Budget</td>
                <td>{{ movie.budget }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.movie-container {
  @apply flex flex-col sm:flex-row justify-center items-center;
}

.movie-container .image-container {
  @apply w-full sm:w-1/2;
}
.movie-container .image-container img {
  @apply mx-auto mb-5;
}
.movie-container .movie-info {
  @apply w-full sm:w-1/2 p-4;
}
.movie-title {
  @apply text-3xl mb-6;
}
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
.movie-description table {
  @apply border-collapse border border-slate-400 w-full;
}
.movie-description td {
  @apply border border-slate-300 px-10;
}
</style>
