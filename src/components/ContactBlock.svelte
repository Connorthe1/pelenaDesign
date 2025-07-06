<script>

import ShuffeledWord from "./ShuffeledWord.svelte";
</script>

<div class="xl:text-xl flex flex-col gap-4 py-8 px-[20px] xl:px-12 font-roboto text-white mt-4 relative overflow-clip tracking-widest xl:rounded-md xl:mx-[80px] bg-dots-clear">
    <p class="text-xs opacity-50">CONTACTS</p>
    <div class="custom-dotted-border pl-4 xl:pl-8 py-4 flex flex-col gap-4 xl:gap-8">
        <p>TELEGRAM: <a href="https://t.me/connorthe1" class="font-thin text-lg text-pink-300 shadow-text"><ShuffeledWord text="@connorthe1"/></a></p>
        <p>EMAIL: <a href="mailto:andrew_muller@vk.com" class="font-thin text-lg text-emerald-300"><ShuffeledWord text="andrew_muller@vk.com"/></a></p>
        <p>LINKEDIN: <a href="https://www.linkedin.com/in/andrew-melnik/" class="font-thin text-lg text-emerald-300"><ShuffeledWord text="andrew-melnik"/></a> </p>
    </div>
    <img src="assets/3D%20Abstract3_%20(9).png" class="hidden xl:block absolute right-[80px] -bottom-20 h-64" alt="">
    <div class="absolute right-0 top-0 h-full flex flex-col">
        <div class="w-1 bg-pink-600 flex-1"></div>
        <div class="w-1 bg-teal-600 flex-1"></div>
        <div class="w-1 bg-amber-500 flex-1"></div>
        <div class="w-1 bg-cyan-500 flex-1"></div>
    </div>
</div>

<style>
.shadow-text {
    text-shadow: #FB64B6FF 1px 0 12px;
}
.custom-dotted-border {
    border-left: 3px solid transparent; /* Прозрачная граница */
    border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 50%, transparent 50%) 0 0 0 8 / 0 0 0 1px repeat; /* Градиент для пунктира */
}
img {
    animation: saturate 3s linear infinite;
}
@keyframes saturate {
    0% {
        filter: saturate(100%);
    }
    50% {
        filter: saturate(200%);
    }
    100% {
        filter: saturate(100%);
    }

}
</style>