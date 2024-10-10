<template>
    <section class="w-[100%] flex justify-center">
        <div class="max-w-[1200px] w-[100%] flex justify-between items-center min-h-[100vh]">
            <img src="../assets/hero.jpg" alt="Hero" class="w-[50%] mix-blend-multiply">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col text-[50px] font-[600] gap-3">
                    <h1 class=" leading-10">Hi, I'm <span>Sadriddin</span></h1>
                    <h2 class=" leading-10">Frontend Developer</h2>
                </div>
                <p class="text-[20px]">I can create any kind of websites. I can always finish projects on time.</p>
                <div class="flex flex-col gap-3">
                    <h4 class="text-[24px] font-[500]">Contact with:</h4>
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