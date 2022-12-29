<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref<boolean>(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
<template>
  <header class="movie-header">
    <div class="main-logo">Logo</div>
    <div class="mobile-menu">
      <button class="mobile-menu-button" @click="toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" v-show="!showMenu" />
        <font-awesome-icon icon="fa-solid fa-xmark" v-show="showMenu" />
      </button>
    </div>
    <div class="main-menu" :class="{ active: showMenu }">
      <ul class="main-menu-nav">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/">Search</RouterLink></li>
        <li><RouterLink to="/">Movies</RouterLink></li>
        <li><RouterLink to="/">TV Shows</RouterLink></li>
      </ul>
    </div>
    <div class="main-options">Test</div>
  </header>
</template>
<style>
.movie-header {
  @apply w-full p-5 flex flex-row flex-wrap justify-between;
}
.main-menu {
  @apply hidden sm:flex;
}
.main-menu.active {
  @apply block w-full;
}
.main-menu.active .main-menu-nav {
  @apply w-full;
}
.main-menu-nav {
  @apply flex flex-wrap;
}
.main-menu.active .main-menu-nav li {
  @apply w-full flex justify-center p-2;
}
.main-menu.active .main-menu-nav li a {
  @apply hover:text-gray-500;
}
.main-menu-nav li {
  @apply px-5;
}
.main-options {
  @apply hidden sm:flex;
}
.mobile-menu {
  @apply flex sm:hidden;
}
.mobile-menu-button {
  @apply outline-none;
}
.mobile-menu-button svg {
  @apply text-white hover:text-gray-500 w-6 h-6;
}
</style>
