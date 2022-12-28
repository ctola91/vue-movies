<script lang="ts" setup></script>
<template>
  <header class="movie-header">
    <div class="main-logo">Logo</div>
    <div class="main-menu">
      <ul class="main-menu-nav">
        <li>Home</li>
        <li>Search</li>
        <li>Movies</li>
        <li>Tv Shows</li>
      </ul>
    </div>
    <div class="main-options">
        Test
    </div>
  </header>
</template>
<style>
.movie-header {
  @apply w-full p-5 flex flex-row;
}
.main-menu-nav {
  @apply flex;
}
.main-menu-nav li {
  @apply px-5;
}
</style>
