<template>
    <section class="w-[100%] flex justify-center px-[16px]">
        <div class="max-w-[1200px] py-[100px] flex flex-col items-center gap-2">
            <h2 class="text-[45px] font-[500]">My Projects</h2>
            <p class="text-[24px] mb-[50px]">Just Click the card to see my works.</p>
            <div class="grid grid-cols-2 gap-6">
                <div v-for="(item,index) in data" :key="index" class="bg-white rounded-md overflow-hidden shadow-lg p-5 flex flex-col gap-3">
                    <div class="border rounded-md overflow-hidden min-h-[260px]">
                        <img :src="item?.img" :alt="item?.title" class="object-cover scale-[1.03] h-[100%] w-[100%]">
                    </div>
                    <div class="flex flex-col justify-between h-[100%] gap-3">
                        <div class="flex flex-col gap-2 items-start">
                            <h3 class="text-[22px] font-[500]">{{ item?.title }}</h3>
                            <p class="text-[17px] text-gray-400">{{ item?.desc }}</p>
                        </div>
                        <a href="" class="px-5 py-2 bg-violet-600 text-white rounded-md self-start">Open website</a>
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
    const data = [
        {
            img: AutoZoom,
            title: "AutoZoom Rental",
            desc: "This project is created by IT Team. I participated in this project as a Team Leader. This project is created using ReactJS. And this project works in two languages: English, Russian. I used i18n to switch languages. I created structure and did Car filters section."
        },
        {
            img: PhoenixPuzzle,
            title: "Phoenix Puzzle",
            desc: "This is puzzle game. I created this game using NextJS. And Tailwind CSS is used for styling. Despite this, THis game is built in tsx structure. That means this project is created using Typescript."
        },
        {
            img: Unsplash,
            title: "Unsplash.com clone",
            desc: "This website is clone of Unsplash.com, but It is not same as real one. Because, I have no permission for auth. This project is built using React + Vite. In this website you can search image and download it."
        },
        {
            img: Shop,
            title: "Online Shop",
            desc: "This is online shop that created using React + Vite. There is only 100 products in this shop, because I used prepared free API for this shop."
        },
        {
            img: Ataev,
            title: "Ataev Bahodir Build",
            desc: "This project is created for Builder Companies. I used aos.js library to animate components. It gives beautiful transitions for components."
        },
        {
            img: Kukdala,
            title: "Kukdala Furniture",
            desc: "This project is created for furniture seller company. It has many sofa armchair and other furniture. I finished difficult algorithm for filter products and you can send your appeal to my telegram bot."
        },
        {
            img: PhoenixTour,
            title: "Phoenix Tour",
            desc: "This is travel Project and you can get information about some cities. You can buy tickets for flight. To purchase ticket you should fill the form and send your message to my telegram bot."
        },
        {
            img: Portfolio,
            title: "My Portfolio",
            desc: "This is my Portfolio Project. In this project I used VueJS first time."
        }
    ]
</script>

<style lang="scss" scoped>

</style>