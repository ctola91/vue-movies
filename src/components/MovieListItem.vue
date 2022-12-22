<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { computed } from "vue";

const url = Movies.imageURL;

interface Props {
  movie: Movie;
  type: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'wide'
});

const image = computed<string | undefined>(() => {
  if(props.type === 'person') {
    return props.movie.profile_path
  }
  if(props.type === 'poster') {
    return props.movie.poster_path
  }
  return props.movie.backdrop_path;
});
</script>
<template>
  <RouterLink to="/" class="movie-item" v-if="movie !== undefined">
    <img :src="`${url}/${image}`" :alt="props.movie.title" />
    <div class="movie-description">
      <!-- <h3>
        {{
          props.movie.name
            ? props.movie.name
            : props.movie.title
            ? props.movie.title
            : ""
        }}
      </h3>
      <p>{{ props.movie.overview }}</p> -->
      <!-- <div>
        <font-awesome-icon
          icon="fa-solid fa-tv"
          v-show="props.movie.media_type === 'tv'"
        />
        <font-awesome-icon
          icon="fa-solid fa-film"
          v-show="props.movie.media_type === 'movie'"
        />
        - {{ props.movie.vote_average }}
      </div> -->
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
