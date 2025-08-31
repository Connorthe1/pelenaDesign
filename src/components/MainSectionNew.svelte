<script>
import TypingEffectBlock from "./TypingEffectBlock.svelte";
import SidebarContacts from "./SidebarContacts.svelte";
import {onMount} from "svelte";

let show = false;

onMount(() => {
    show = true;
});
</script>

<div class="xl:mt-20 text-white font-montserrat flex-col xl:flex xl:flex-row justify-between items-center">
    <div class="font-semibold slide-in" class:show>
        <p class="text-3xl xl:text-[72px] tracking-[-1px] flex items-center gap-6">Привет! Я Андрей <img class="w-16 h-16 xl:w-24 xl:h-24 self-start mb-4 xl:mt-1" src="/assets/call-me-hand-light-skin-tone_1f919-1f3fb.png" alt=""></p>
        <div class="font-light text-xl xl:text-2xl -mt-2">
            <span class="gradient-text">UI/UX дизайнер</span> и <span class="gradient-text">front-end</span> разработчик.
        </div>
        <p class="text-2xl xl:text-[32px] mt-10 xl:leading-10 tracking-[-1px]">Занимаюсь разработкой <br class="xl:hidden block"> <TypingEffectBlock class="gradient-text" />, <br> есть идеи — пиши</p>
    </div>
    <div class="slide-in-top" class:show>
        <SidebarContacts />
    </div>
</div>

<style>
    .slide-in {
        opacity: 0;
        transform: translateX(-10%);
        transition: opacity 1s ease-in, transform 1s ease-out;
    }

    .slide-in-top {
        opacity: 0;
        transform: translateY(-10%);
        transition: opacity 1s ease-in, transform 1s ease-out;
    }

    .slide-in.show {
        opacity: 1;
        transform: translateX(0);
    }
    .slide-in-top.show {
        opacity: 1;
        transform: translateY(0);
    }
    .gradient-text {
        background: linear-gradient(to bottom, #b3e5fb, #5468e6);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        font-weight: 400;

        text-shadow: 2px 2px 10px rgba(89, 106, 237, 0.4),
        4px 4px 20px rgba(29, 136, 243, 0.9);

        transition: 0.2s;
    }

    .gradient-text:hover {
        background: linear-gradient(to bottom, #7ee3fb, #00ceff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;

        text-shadow: 2px 2px 10px #7ee3fb,
        4px 4px 20px #00ceff;
        transition: 0.2s;
    }
</style>