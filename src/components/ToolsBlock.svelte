<script>

    import ShuffeledWord from "./ShuffeledWord.svelte";
</script>

<div class="text-xl flex flex-col gap-4 py-8 px-[20px] xl:px-12 font-roboto text-white mt-4 relative overflow-clip tracking-widest xl:rounded-md bg-dots-clear group">
    <p class="text-xs opacity-50">WORKING TOOLS</p>
    <div class="flex flex-wrap gap-6 filter grayscale group-hover:grayscale-0 transition duration-300 items-center">
        <img src="assets/tools/figma.svg" class="w-12 h-12" alt="">
        <img src="assets/tools/js.svg" class="w-12 h-12" alt="">
        <img src="assets/tools/vue.svg" class="w-12 h-12" alt="">
        <img src="assets/tools/svelte.svg" class="w-12 h-12" alt="">
        <img src="assets/tools/pixi.svg" class="h-10" alt="">
        <img src="assets/tools/nodejs.svg" class="h-12" alt="">
        <img src="assets/tools/photoshop.svg" class="h-12" alt="">
        <img src="assets/tools/ue.svg" class="h-12" alt="">
        <img src="assets/tools/tailwind.svg" class="h-6" alt="">
        <img src="assets/tools/blender.svg" class="h-12" alt="">
    </div>
    <img src="assets/3D%20Abstract3_%20(9).png" class="hidden 2xl:block absolute right-[80px] -top-36 h-64 saturate-0 group-hover:saturate-150 transition duration-300" alt="">
    <div class="absolute right-0 top-0 h-full flex flex-col">
        <div class="w-1 bg-amber-500 flex-1"></div>
        <div class="w-1 bg-cyan-500 flex-1"></div>
        <div class="w-1 bg-pink-600 flex-1"></div>
        <div class="w-1 bg-teal-600 flex-1"></div>
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
</style>