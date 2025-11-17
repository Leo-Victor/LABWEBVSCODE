<script setup lang="ts">
// import _imports_0 from "./assets/image/carousel-1.jpg";
// import _imports_1 from "img/carousel-2.jpg";
// import _imports_2 from "img/carousel-3.jpg";
// import _imports_3 from "img/nb1.jpg";
// import _imports_4 from "img/nb2.jpg";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />

  <router-view />

  <Footer />


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
