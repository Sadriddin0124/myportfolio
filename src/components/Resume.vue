<template>
    <section id="resume" class="w-[100%] flex justify-center flex-col items-center py-[100px] px-[16px]">
        <div id="pdf-content" class="max-w-[1000px] hidden lg:block w-[100%] bg-white min-h-[1000px] px-[60px] pt-[10px] pb-[60px] relative">
            <h1 class="text-[35px] text-center font-[500]">Sadriddin Ravshanov</h1>
            <h5 class="text-center text-[18px]">Tashkent, Uzbekistan</h5>
            <div class="w-[100%] flex justify-center gap-4">
                <a target="blank" class="underline text-blue-500 hover:text-blue-600" href="https://linkedin.com/in/sadriddin-ravshanov24">LinkedIn</a>
                <a target="blank" class="underline text-blue-500 hover:text-blue-600" href="https://mail.google.com/mail/?view=cm&fs=1&to=sadriddinravshanov19@gmail.com">Gmail</a>
                <a target="blank" class="underline text-blue-500 hover:text-blue-600" href="https://github.com/Sadriddin0124">Github</a>
                <a target="blank" class="underline text-blue-500 hover:text-blue-600" href="https://t.me/farkhodo_v1ch">Telegram</a>
                <a target="blank" class="underline text-blue-500 hover:text-blue-600" href="tel: +998886330124">+998886330124</a>
            </div>
            <h3 class="border-b-2 border-b-black pb-2 text-[18px] font-[700]">SUMMARY</h3>
            <p class="mt-1 leading-5">
                I am a passionate front-end developer with over 1.5 years of experience, specializing in crafting user-centric websites, e
                commerce platforms, and applications. Proficient in CSS3, HTML, Typescript, JavaScript, React.js, Next.js, and related 
                technologies, I am dedicated to expanding my skills in frontend development. Known for delivering responsive designs, 
                customizing CSS themes, and collaborating effectively within dynamic teams. I stay updated with the latest trends, 
                ensuring the relevance of my contributions. Experienced in large-scale multi user services and creating commercial 
                applications from scratch. Eager to contribute to innovative projects and further grow in web development. 
            </p>
            <h3 class="border-b-2 border-b-black pb-2 text-[18px] font-[700] mt-2">PROFESSIONAL EXPERIENCE</h3>
            <h3 class="text-[18px] mt-2 font-[700]">Frontend Web Developer</h3>
            <div class="mt-1 flex justify-between items-center">
                <h3 class="text-[16px] font-[700]">IT Time Academy</h3>
                <h3 class="">2023-March / 2024-April</h3>
            </div>
            <div class="mt-1 ">
                <p class="leading-5">Worked for 1 year in an IT team, specializing in web application development and support. 
                    Responsibilities included enhancing digital presence and user engagement through the creation of business card 
                    websites, landing pages, and online stores. Developed responsive user interfaces to ensure seamless experiences across 
                    devices. Maintained robust codebases, conducted thorough code reviews, and provided mentorship to junior 
                    developers to uphold high standards of quality and efficiency. Implemented new features and promptly resolved 
                    technical issues to improve project functionality and user satisfaction. 
                </p>
            </div>
            <div class="mt-1 flex justify-between items-center">
                <h3 class="text-[16px] font-[700]">LIMSA Company</h3>
                <h3 class="">2024-April / working...</h3>
            </div>
            <div class="mt-1">
                <p class="leading-5">Since joining LIMSA, I have worked as a frontend developer, focusing on the development and maintenance of 
                    user interfaces using React.js and Next.js. I have also created business card websites, landing pages, and online stores 
                    to enhance digital presence and facilitate user engagement, leveraging my expertise in UI/UX design. 
                </p>
            </div>
            <h3 class="border-b-2 border-b-black pb-2 text-[18px] font-[700] mt-2">SKILLS & COMPETENCIES </h3>
            <ul class="mt-2 flex flex-col gap-0">
                <li v-for="(item,index) in skills" :key="index" class="text-[18px] leading-5">
                    <span class="font-[700]">{{ item?.key }} {{   }}</span>
                    <span>{{ item?.value }}</span>
                </li>
            </ul>
            <h3 class="border-b-2 border-b-black pb-2 text-[18px] font-[700] mt-2">PROJECTS</h3>
            <div class="mt-1 grid grid-cols-4 gap-1">
                <a :href="item?.link" v-for="(item,index) in projects" :key="index" class="text-blue-600 underline">{{ item?.title }}</a>
            </div>
            <button @click="generatePDF" class="absolute text-[24px] bottom-6 hover:text-blue-600"><font-awesome-icon :icon="['fas', 'download']" /></button>
        </div>
        <div class="lg:hidden flex flex-col gap-2 items-center">
            <img src="../assets/resume.png" alt="Resume">
            <a href="../../public/SadriddinRavshanov.pdf" download="Sadriddin Ravshanov_CV" @click="generatePDF" class="px-5 py-2 bg-violet-600 text-white rounded-md">Download <font-awesome-icon :icon="['fas', 'download']" /></a>
        </div>
    </section>
</template>

<script setup>
    const skills = [
        {
            key: "Programming Languages:",
            value: "Javascript, Typescript, Python(unfinished)"
        
        },
        {
            key: "Web Development:",
            value: "React, Next.js, Vue.js, HTML/CSS, JSON/XML"
        },
        {
            key: "Styling Frameworks:",
            value: "Sass, Tailwind CSS, Bootstrap"
        },
        {
            key: "State Management:",
            value: "Zustand, Redux, Pinia"
        },
        {
            key: "Libraries and Frameworks:",
            value: "React UI libraries, Vuetify, i18n, OAuth"
        },
        {
            key: "Version Control Systems:",
            value: " Git, GitHub"
        },
        {
            key: "Development Tools:",
            value: "JIRA, Trello, Microsoft Office "
        },
        {
            key: "Languages:",
            value: "English(Advanced), Uzbek(Native), Russian(Elementary)"
        },
    ]
    const projects = [
            {
                title: "AutoZoom Rental",
                link: "https://autozoomrental.com/"
            },
            {
                title: "Phoenix Puzzle",
                link: "https://game-sable-five.vercel.app/"
            },
            {
                title: "Unsplash.com clone",
                link: "https://un-splash.vercel.app/"
            },
            {
                title: "Ataev Bahodir Build",
                link: "https://building1.vercel.app/"
            },
            {
                title: "Kukdala Furniture",
                link: "https://kukdalafurniture.vercel.app/"
            },
            {
                title: "Phoenix Tour",
                link: "https://tour-rho.vercel.app/uz"
            },
            {
                title: "My Portfolio",
                link: "https://myportfolio-flax-alpha.vercel.app/"
            },
            {
                title: "Urban Builders",
                link: "https://urbanbuildings-git-main-sadriddins-projects-fbc4325a.vercel.app/"}
    ]
    import html2pdf from 'html2pdf.js';

    const generatePDF = () => {
        const element = document.getElementById('pdf-content');
        
        const options = {
            margin: 0,
            filename: 'SadriddinRavshanov.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        html2pdf().from(element).set(options).save();
    }
</script>

<style lang="scss" scoped>

</style>