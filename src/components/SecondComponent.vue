<script setup lang="ts">
import { defineComponent } from "vue";

const props = defineProps({
  name: { type: String, required: true},
  title: { type: String, required: true},
  description: { type: String, required: true},
  age: Number,
  isValid: Boolean
});

// const props = defineProps<{
//   name: string;
//   title: string;
//   description: string;
//   age: number;
//   isValid: boolean;
// }>();

// export default defineComponent({
//     props: {
//         name: String,
//         title: String,
//         description: String,
//         age: Number,
//         isValid: Boolean
//     }
// });
</script>
<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
    <div>
      <h3>Description</h3>
      <p>
        {{ description }}
      </p>
      <p>Age: {{ age }}</p>
      <p>More than 18 years old?: {{ isValid }}</p>
    </div>
  </div>
</template>
