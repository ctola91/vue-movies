<script lang="ts">
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { FirstComponent, SecondComponent },
});
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FirstComponent />
    <SecondComponent
      name="Juan"
      title="Perez"
      description="Hello World"
      :age="12"
      :is-valid="true"
    />
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
