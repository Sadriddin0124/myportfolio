<template>
    <nav class="w-[100%] flex justify-center shadow-md bg-white fixed z-50 px-[16px]">
        <div class="max-w-[1200px] w-[100%] flex items-center justify-between">
            <div class="w-[80px] h-[80px]">
                <img src="../assets/logo.avif" alt="Logo">
            </div>
            <ul class="hidden md:flex gap-7">
                <li v-for="(item,index) in links" :key="index" class="relative group">
                    <span class="absolute inline-block w-full h-[2px] bg-violet-600 bottom-[-16px] opacity-0 group-hover:bottom-0 group-hover:opacity-[1] ease-linear duration-300"></span>
                    <a :href="item.path" class="text-[18px] ease-linear duration-150 hover:text-violet-600">{{ item?.text }}</a>
                </li>
            </ul>
            <button :class="active ? 'relative z-30 text-[26px] text-white ease-linear duration-500' : 'md:hidden ease-linear duration-500 text-[26px]'" @click="changeActive">
                <font-awesome-icon :icon="['fas', 'xmark']" v-if="active"/>
                <font-awesome-icon :icon="['fa', 'bars']" v-else/>
            </button>
            <ul :class="active ? 'fixed z-20 flex w-[100%] h-[100vh] gap-3 flex-col text-white p-4 right-0 top-0 items-center justify-center opacity-[1] ease-linear duration-500' : 'hidden opacity-0 ease-linear duration-500'">
                <li v-for="(item,index) in links" :key="index" class="relative group" @click="changeActive">
                    <span class="absolute inline-block w-full h-[2px] bg-white bottom-[-16px] opacity-0 group-hover:bottom-0 group-hover:opacity-[1] ease-linear duration-300"></span>
                    <a :href="item.path" class="text-[28px] ease-linear duration-150 hover:text-white">{{ item?.text }}</a>
                </li>
            </ul>
            <div :class="active ? 'fixed w-[4000px] h-[4000px] top-0 right-0 bg-violet-600 rounded-b-full ease-linear duration-500' : 'fixed ease-linear duration-500 opacity-0 w-[80px] z-[-1] h-[80px] bg-violet-600 right-0 top-0 rounded-full'"></div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

    const links = [
        {text: "Home", path: "/"},
        {text: "Portfolio", path: "#portfolio"},
        {text: "Resume", path: "#resume"},
        {text: "Services", path: "#services"},
        {text: "Contact", path: "#contact"},
    ]
    const active = ref(false)
    const changeActive = () => {
        active.value = !active.value
    }
</script>

<style lang="scss" scoped>

</style>