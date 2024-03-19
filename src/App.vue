<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import OpenSans from '../../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf';
</script>

<template>
  <div class="font-open-sans">
    <Header />
    <router-view class="" />
    <Footer />
  </div>
</template>
