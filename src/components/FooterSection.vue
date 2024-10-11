<template>
    <footer class="w-[100%] px-[16px] py-[100px] bg-zinc-800 flex justify-center">
        <div class="max-w-[1200px] w-[100%] flex flex-col items-center gap-6">
            <ul class="flex gap-4 items-start sm:gap-7 flex-col sm:flex-row">
                <li v-for="(item,index) in links" :key="index" class="relative group">
                    <span class="absolute inline-block w-full h-[2px] bg-violet-600 bottom-[-16px] opacity-0 group-hover:bottom-0 group-hover:opacity-[1] ease-linear duration-300"></span>
                    <a :href="item.path" class="text-[18px] text-white ease-linear duration-150 hover:text-violet-600">{{ item?.text }}</a>
                </li>
            </ul>
            <div class="flex gap-3 text-violet-600 bg-white px-12 py-6 rounded-ss-[100px] rounded-ee-[100px]">
                <a href="https://t.me/farkhodo_v1ch" class="ease-linear duration-200 hover:text-blue-500">
                    <font-awesome-icon :icon="['fab', 'telegram']" size="3x"/>
                </a>
                <a href="https://github.com/Sadriddin0124" class="ease-linear duration-200 hover:text-black">
                    <font-awesome-icon :icon="['fab', 'github']" size="3x"/>
                </a>
                <a href="https://linkedin.com/in/sadriddin-ravshanov24" class="ease-linear duration-200 hover:text-blue-600">
                    <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"/>
                </a>
            </div>
            <h3 class="text-[20px] font-bold text-white">Sadriddin Ravshanov</h3>
        </div>
    </footer>
</template>

<script setup>
    const links = [
            {text: "Home", path: "/"},
            {text: "Portfolio", path: "#portfolio"},
            {text: "Resume", path: "#resume"},
            {text: "Services", path: "#services"},
            {text: "Contact", path: "#contact"},
        ]
</script>

<style lang="scss" scoped>

</style>