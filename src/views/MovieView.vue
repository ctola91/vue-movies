<script setup lang="ts">
// import Movies from "@/services/Movies";
import MovieItem from "@/components/MovieItem.vue";
import type { Movie } from "@/types/Movie";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMovieStore } from "../stores/movies";

const store = useMovieStore();

const { movieSelected } = storeToRefs(store);

const router = useRouter();
const route = useRoute();
// const movie = ref();

// const getContent = async () => {
//   const result = await Movies.getSingleContent(
//     Number(route.params.id),
//     <string | undefined>route.query.type
//   );
//   movie.value = result;
// };

const getContent = async () => {
  store.getMovie(Number(route.params.id), <string>route.query.type);
};

onMounted(async () => {
  await getContent();
  // await getContent();
});
</script>
<template>
  <MovieItem :movie="movieSelected" type="poster" :title="store.movieTitle" />
</template>
