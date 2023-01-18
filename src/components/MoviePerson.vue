<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

// const name = ref('Hello'); // string
const name = ref<string>("Hello"); // string
const age = ref<number>(18); // number
const year = ref<number | string>(2023); // number | string
const description = ref<string>(); // string | undefined

// const birthYear = computed(() => Number(year.value) - age.value);
const birthYear = computed<number>(() => Number(year.value) - age.value);

const handleClick = (e: Event) => {
  console.log((e.target as HTMLButtonElement).className);
};

const handleChange = (event: Event) => {
  console.log((event.target as HTMLInputElement).value);
};

onMounted(() => {
  description.value = "Hello EDteam";
  year.value = "2023";
});
</script>
<template>
  <div>
    <h2>{{ name }}</h2>
    <span>{{ age }}</span>
    <span>{{ year }}</span>
    <p v-if="description">{{ description }}</p>
    <input type="text" @keyup="handleChange" />
    <button @click="handleClick" class="my-button">Hello</button>
  </div>
</template>
