<script setup lang="ts">
import type { Person } from '@/types/Person';


const props = defineProps<{
  person: Person;
}>();

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
    <h1>{{ person.name }}</h1>
    <h2>{{ person.title }}</h2>
    <div>
      <h3>Description</h3>
      <p>
        {{ person.description }}
      </p>
      <p>Age: {{ person.age }}</p>
      <p>More than 18 years old?: {{ person.isValid }}</p>
    </div>
  </div>
</template>
