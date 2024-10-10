<template>
    <section class="w-[100%] flex justify-center px-[16px]">
        <div class="max-w-[1200px] w-[100%] flex justify-between items-center lg:flex-row flex-col lg:min-h-[100vh] py-[200px] lg:py-[100px]">
            <img src="../assets/hero.jpg" alt="Hero" class="hidden lg:block w-[50%] mix-blend-multiply">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col text-[35px] md:text-[50px] font-[600] text-center lg:text-left">
                    <h1 class="">Hi, I'm <span class="text-violet-600">Sadriddin</span></h1>
                    <h2 class="">Frontend Developer</h2>
                </div>
                <p class="text-[18px] md:text-[20px] text-center lg:text-left">I can create any kind of websites. I can always finish projects on time.</p>
                <div class="flex flex-col gap-3 items-center lg:items-start">
                    <h4 class="text-[20px] md:text-[24px] font-[500]">Contact with:</h4>
                    <div class="flex gap-3 text-violet-600">
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
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
<style lang="scss" scoped>

</style>