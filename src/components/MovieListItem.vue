<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";

const url = Movies.imageURL;

const props = defineProps<{
  movie: Movie;
}>();
</script>
<template>
  <RouterLink to="/" class="movie-item" v-if="movie !== undefined">
    <img :src="`${url}/${props.movie.poster_path}`" :alt="props.movie.title" />
    <div>
      <h3>
        {{
          props.movie.name
            ? props.movie.name
            : props.movie.title
            ? props.movie.title
            : ""
        }}
      </h3>
      <p>{{ props.movie.overview }}</p>
      <div>
      <font-awesome-icon icon="fa-solid fa-tv" v-show="props.movie.media_type === 'tv'" />
      <font-awesome-icon icon="fa-solid fa-film" v-show="props.movie.media_type === 'movie'" />
      - {{ props.movie.vote_average }}</div>
    </div>
  </RouterLink>
</template>
<style scoped>
.movie-item {
  @apply max-w-xs w-auto;
}
.movie-item h3 {
  @apply text-base;
}
.movie-item p {
  @apply text-sm;
}
.movie-item img {
  @apply w-full;
}
</style>
