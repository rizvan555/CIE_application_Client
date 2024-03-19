<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div class="">
    <Header />
    <router-view class="" />
    <Footer />
  </div>
</template>
