<script setup>
import { ref } from 'vue';
const data = ref([
  {title: "salom", desc: "Assalomu Alaykum"},
  {title: "hi", desc: "Assalamu Alaikum"},
])

const addedItem = {title: "salom", desc: "Assalomu Alaykum"}

const AddItem = (item) => {
  data.value.push(item)
}
</script>

<template>
  <div class="box">
    <h1>Coming soon!!!</h1>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.box {
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 34px;
  color: white;
  font-family: sans-serif;
}
</style>
