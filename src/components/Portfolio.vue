<template>
    <section id="portfolio" class="w-[100%] flex justify-center px-[16px]">
        <div class="max-w-[1200px] pb-[100px] flex flex-col items-center gap-2">
            <h2 class="text-[35px] md:text-[45px] font-[500]">My Projects</h2>
            <p class="text-[20px] md:text-[24px] mb-[50px]">Just Click the button to see my works.</p>
            <div class="grid md:grid-cols-2 gap-6">
                <div v-for="(item,index) in data" :key="index" class="bg-white rounded-md overflow-hidden shadow-lg p-5 flex flex-col gap-3">
                    <div class="border rounded-md overflow-hidden min-h-[200px] sm:min-h-[260px]">
                        <img :src="item?.img" :alt="item?.title" class="object-cover scale-[1.03] h-[100%] w-[100%]">
                    </div>
                    <div class="flex flex-col justify-between h-[100%] gap-3">
                        <div class="flex flex-col gap-2 items-start">
                            <h3 class="text-[22px] font-[500]">{{ item?.title }}</h3>
                            <p class="text-[17px] text-gray-400">{{ item?.desc }}</p>
                        </div>
                        <a :href="item?.link" target="blank" class="px-5 py-2 bg-violet-600 text-white rounded-md self-start">Open website</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import AutoZoom from "../assets/projects/autozoom.png"
    import PhoenixPuzzle from "../assets/projects/phoenix_puzzle.png"
    import Unsplash from "../assets/projects/unsplash.png"
    import Shop from "../assets/projects/shop.png"
    import Ataev from "../assets/projects/ataev.png"
    import Kukdala from "../assets/projects/kukdala.png"
    import PhoenixTour from "../assets/projects/phoenixtour.png"
    import Portfolio from "../assets/projects/portfolio.png"
    import UrbanBuilders from "../assets/projects/urbanbuilders.png"
    const data = [
        {
            img: AutoZoom,
            title: "AutoZoom Rental",
            desc: "This project is created by IT Team. I participated in this project as a Team Leader. This project is created using ReactJS. And this project works in two languages: English, Russian. I used i18n to switch languages. I created structure and did Car filters section.",
            link: "https://autozoomrental.com/"
        },
        {
            img: PhoenixPuzzle,
            title: "Phoenix Puzzle",
            desc: "This is puzzle game. I created this game using NextJS. And Tailwind CSS is used for styling. Despite this, This game is built in tsx structure. That means this project is created using Typescript.",
            link: "https://game-sable-five.vercel.app/"
        },
        {
            img: Unsplash,
            title: "Unsplash.com clone",
            desc: "This website is clone of Unsplash.com, but It is not same as real one. Because, I have no permission for auth. This project is built using React + Vite. In this website you can search image and download it.",
            link: "https://un-splash.vercel.app/"
        },
        {
            img: Shop,
            title: "Online Shop",
            desc: "This is online shop that created using React + Vite. There is only 100 products in this shop, because I used prepared free API for this shop.",
            link: "https://shop-beta-navy.vercel.app/"
        },
        {
            img: Ataev,
            title: "Ataev Bahodir Build",
            desc: "This project is created for Builder Companies. I used aos.js library to animate components. It gives beautiful transitions for components.",
            link: "https://building1.vercel.app/"
        },
        {
            img: Kukdala,
            title: "Kukdala Furniture",
            desc: "This project is created for furniture seller company. It has many sofa armchair and other furniture. I finished difficult algorithm for filter products and you can send your appeal to my telegram bot.",
            link: "https://kukdalafurniture.vercel.app/"
        },
        {
            img: PhoenixTour,
            title: "Phoenix Tour",
            desc: "This is travel Project and you can get information about some cities. You can buy tickets for flight. To purchase ticket you should fill the form and send your message to my telegram bot.",
            link: "https://tour-rho.vercel.app/uz"
        },
        {
            img: Portfolio,
            title: "My Portfolio",
            desc: "This is my Portfolio Project. In this project I used VueJS first time.",
            link: "https://myportfolio-flax-alpha.vercel.app/"
        },
        {
            img: UrbanBuilders,
            title: "Urban Builders",
            desc: "This project is created for Builder Companies. I used AOS.js library to add beautiful transition to components. This website works in 3 languages using i18n. And you can send your messages to my telegram bot.",
            link: "https://urbanbuildings-git-main-sadriddins-projects-fbc4325a.vercel.app/"
        }
    ]
</script>

<style lang="scss" scoped>

</style>