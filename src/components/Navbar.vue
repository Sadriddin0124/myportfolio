<template>
    <nav class="w-[100%] flex justify-center shadow-md bg-white fixed z-50">
        <div class="max-w-[1200px] w-[100%] flex items-center justify-between">
            <div class="w-[80px] h-[80px]">
                <img src="../assets/logo.avif" alt="Logo">
            </div>
            <ul class="flex gap-7">
                <li v-for="(item,index) in links" :key="index" class="relative group">
                    <span class="absolute inline-block w-full h-[2px] bg-violet-600 bottom-[-16px] opacity-0 group-hover:bottom-0 group-hover:opacity-[1] ease-linear duration-300"></span>
                    <a :href="item.path" class="text-[18px] ease-linear duration-150 hover:text-violet-600">{{ item?.text }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    const links = [
        {text: "Home", path: "#home"},
        {text: "Portfolio", path: "#portfolio"},
        {text: "Resume", path: "#resume"},
        {text: "Service", path: "#service"},
        {text: "Contact", path: "#contact"},
    ]
</script>

<style lang="scss" scoped>

</style>