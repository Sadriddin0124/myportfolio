<template>
    <section class="w-[100%] flex justify-center px-[16px] py-[100px]">
        <div class="max-w-[1200px] w-[100%] sm:p-12 gap-12 items-center lg:items-start flex-col lg:flex-row flex justify-between">
            <div class="flex flex-col gap-8 sm:w-[80%] lg:w-[40%] items-center lg:items-start">
                <h2 class="text-[45px] font-[500]">Contact us</h2>
                <p class="text-center lg:text-left">If you need something from me, you can fill the form and sent your message to me. I'll try to reply in 24 hours.</p>
            </div>
            <form @submit="sendMessage" class="grid grid-cols-1 sm:grid-cols-2 max-w-[550px] w-[100%] gap-4 px-4 sm:px-12 py-12 bg-white shadow-xl">
                <div class="flex flex-col gap-1 w-[100%] col-span-2 sm:col-span-1">
                    <label for="firstName">First name*</label>
                    <input v-model="firstName" type="text" id="firstName" class="py-3 px-2 bg-gray-50 outline-none rounded-md border">
                </div>
                <div class="flex flex-col gap-1 w-[100%] col-span-2 sm:col-span-1">
                    <label for="lastName">Last name*</label>
                    <input v-model="lastName" type="text" id="lastName" class="py-3 px-2 bg-gray-50 outline-none rounded-md border">
                </div>
                <div class="flex flex-col gap-1 w-[100%] col-span-2">
                    <label for="email">Email*</label>
                    <input v-model="email" type="email" id="email" class="py-3 px-2 bg-gray-50 outline-none rounded-md border">
                </div>
                <div class="flex flex-col gap-1 w-[100%] col-span-2">
                    <label for="message">What can I help you with?</label>
                    <textarea v-model="appeal" id="message" class="py-3 px-2 bg-gray-50 outline-none rounded-md border h-[100px] resize-none"></textarea>
                </div>
                <button type="submit" class="px-4 py-2 bg-violet-600 text-white rounded-full transition-all border-2 font-[500] border-violet-600 hover:bg-white hover:text-violet-600 col-span-2 sm:col-span-1">Submit</button>
            </form>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import {useToast} from 'vue-toast-notification';
    import 'vue-toast-notification/dist/theme-sugar.css';

    const $toast = useToast();
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const appeal = ref('')
    const botToken = '7808946225:AAFjWBTokCAmVKLYICdZaSQy_ZjkBOpKlao';
    const chatId = '5575104582'
    const sendMessage = async (e) => {
        e.preventDefault();
        const message = `
        email: ${email.value}
        Assalomu alaykum murojaatim shundan iborat: 
        ${appeal.value}

        Hurmat bilan, ${firstName.value} ${lastName.value}`
        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        try {
            const response = await axios.post(apiUrl, {
            chat_id: chatId,
            text: message,
            });
            console.log('Message sent:', response.data);
            if (response?.data?.ok) {
                $toast.success('Message sent successfully!');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
</script>

<style lang="scss" scoped>

</style>