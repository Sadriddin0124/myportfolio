<template>
  <div class="bg-slate-200 min-h-[100vh]">
    <Navbar/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Resume/>
  </div>
</template>

<script setup>
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue"
import Portfolio from "./components/Portfolio.vue";
import Resume from "./components/Resume.vue";
import Services from "./components/Services.vue";
</script>

<style lang="scss" scoped>

</style>