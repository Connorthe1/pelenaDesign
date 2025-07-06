<script>
    // import {onMount} from "svelte";
    //
    // onMount(() => {
    //     const header = document.querySelector("#header");
    //     window.addEventListener("scroll", () => {
    //         checkPosition()
    //     });
    //
    //     function checkPosition() {
    //         if (window.scrollY > 0) {
    //             header.classList.add("active");
    //         } else {
    //             header.classList.remove("active");
    //         }
    //     }
    //
    //     checkPosition()
    // })
</script>

<nav id="header" class="fixed grid xl:grid-cols-3 h-14 xl:h-20 items-center text-white z-10 xl:px-[80px] inset-x-0 fade-header max-w-work mx-auto px-global z-20">
    <div class="font-bold tracking-widest text-lg">PELENA <span class="font-light">design</span></div>
    <div class="flex items-center p-1 rounded-full justify-self-center border border-white/25 bg-white/15 shadow-lg backdrop-blur-[2px]">
        <a href="#works" class="text-sm px-4 py-2 rounded-full hover:bg-white/10 transition">Work</a>
        <a href="#footer" class="text-sm px-4 py-2 rounded-full hover:bg-white/10 transition">Contacts</a>
    </div>
    <div class="flex items-center gap-6 justify-self-end">
        <a href="" class="opacity-80 hover:opacity-100 transition">
            <img src="/assets/TG.svg" class="w-8 h-8 filter invert" alt="">
        </a>
        <a href="" class="opacity-80 hover:opacity-100 transition">
            <img src="/assets/linkedin.svg" class="w-8 h-8 filter invert" alt="">
        </a>
    </div>
</nav>

<style>
a, div {
    z-index: 1;
}
</style>