<script setup lang="ts">
import Movies from '@/services/Movies';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const movie = ref();

const getContent = async () => {
  const { results } = await Movies.getSingleContent(Number(route.params.id), route.query.type);
  movie.value = results;
}

onMounted(async () => {
  await getContent();
});
</script>
<template>
  <div>Movie</div>
</template>
