<script setup lang="ts">
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import MovieItem from "@/components/MovieItem.vue";
import type { Person } from "@/types/Person";
import ThirdComponent from "@/components/ThirdComponent.vue";
import MoviePerson from "@/components/MoviePerson.vue";

const person: Person = {
  name: "juan",
  title: "Software Developer",
  description: "Hello World",
  age: 12,
  isValid: true,
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <FirstComponent /> -->
    <!-- <SecondComponent
      name="Juan"
      title="Software Developer"
      description="Hello World"
      :age="12"
      :is-valid="true"
    /> -->
    <!-- <ThirdComponent :person="person" /> -->
    <MoviePerson />
    <MovieItem />
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
