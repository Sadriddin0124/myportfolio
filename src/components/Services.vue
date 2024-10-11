<template>
    <section id="services" class="w-[100%] flex justify-center items-center flex-col gap-10 px-[16px]">
        <div class="max-w-[1200px] w-[100%] flex flex-col items-center">
            <h2 class="text-[35px] md:text-[45px] font-[500]">Services</h2>
            <h3 class="mt-[20px] text-[20px] md:text-[35px]">What services can I provide?</h3>
        </div>
        <div class="max-w-[1200px] mx-auto pb-[150px] w-[100%]">
            <swiper
                :modules="modules"
                :space-between="30"
                navigation
                :pagination="{ clickable: true }"
                :loop="true"
                :breakpoints="{
                    '640': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    '1024': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }"
                :autoplay="{ delay: 5000, disableOnInteraction: false }"
            >
                <swiper-slide v-for="(item,index) in data" :key="index">
                    <div class="py-8 px-10 h-[350px] flex flex-col gap-3 rounded-lg items-center bg-white text-black ease-linear duration-200 hover:bg-violet-600 cursor-pointer group">
                        <font-awesome-icon :icon="item?.icon" class="text-[50px] text-violet-600 group-hover:text-white ease-linear duration-200"/>
                        <h3 class="text-[24px] font-[500] text-center group-hover:text-white ease-linear duration-200">{{ item?.title }}</h3>
                        <p class="text-[16px] text-center group-hover:text-white ease-linear duration-200">{{ item?.desc }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import 'swiper/css/scrollbar'
    const modules = ref([Navigation, Pagination, Scrollbar, A11y, Autoplay])
    const data = [
        {
            icon: ['fas', 'code'],
            title: "Creating any kind of websites",
            desc: "I can create any kind of websites. Such as, CRMs, Landing pages, Visiting websites and Games also. You can order to create your website."
        },
        {
            icon: ['fas', 'microchip'],
            title: "Which technologies do I know?",
            desc: "When it comes to my knowledge. The skills that I know: ReactJS, NextJS, VueJS, Tailwind CSS, CSS, HTML, Bootstrap, SASS, Redux, Zustand, i18n, Trello"
        },
        {
            icon: ['fas', 'mobile'],
            title: "Website features",
            desc: "If you choose me. Your website has beautiful design. And your website should be flexible with my Responsive Web Design Skills. To sum up, Your website have more languages."
        },
        {
            icon: ['far', 'clock'],
            title: "Soft Skills",
            desc: "When I start project, I try to finish that project. I can't even sleep well until ending of the project. That means deadline is very important for me."
        },
        {
            icon: ['fas', 'user'],
            title: "About me",
            desc: "When it comes to me, I outgoing person. I can get on every kind of people easily. So I never choose type of people to work in th beginning."
        },
        {
            icon: ['fas', 'language'],
            title: "Languages",
            desc: "I am Uzbek, Uzbek is native language for me. Despite this, I have B2 certificate from IELTS. That means, I can learn new technologies without difficulties."
        }
    ]
    
</script>

<style lang="scss" scoped>

</style>