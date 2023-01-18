<script setup lang="ts">
const props = defineProps<{
  title: string;
  tagline: string;
  releaseDate: string;
  description: string;
  img: string;
  revenue: number;
  budget: number;
  popularity: number;
}>();
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <span>{{ releaseDate }}</span>
    <span>{{ tagline }}</span>
    <p>{{ description }}</p>
    <p>
      <span>{{ revenue }} - {{ budget }} - {{ popularity }}</span>
    </p>
  </div>
</template>
