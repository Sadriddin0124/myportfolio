<template>
  <div class="bg-slate-200 min-h-[100vh]">
    <Navbar/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Resume/>
    <Contact/>
    <FooterSection/>
  </div>
</template>

<script setup>
import Contact from "./components/Contact.vue";
import FooterSection from "./components/FooterSection.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue"
import Portfolio from "./components/Portfolio.vue";
import Resume from "./components/Resume.vue";
import Services from "./components/Services.vue";
</script>

<style lang="scss" scoped>

</style>