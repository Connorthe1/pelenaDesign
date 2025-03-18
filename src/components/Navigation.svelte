<script>
    import {onMount} from "svelte";

    onMount(() => {
        const header = document.querySelector("#header");
        window.addEventListener("scroll", () => {
            checkPosition()
        });

        function checkPosition() {
            if (window.scrollY > 0) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        }

        checkPosition()
    })
</script>

<nav id="header" class="fixed grid grid-cols-4 h-20 items-center text-white text-xl z-10 px-[80px] inset-x-0 fade-header">
    <div class="font-bold tracking-widest">PELENA <span class="font-light">design</span></div>
    <a href="#main" class="hover:italic hover:text-pink-300 transition duration-200">MAIN</a>
    <a href="#works" class="hover:italic hover:text-pink-300 transition duration-200 text-center">WORKS</a>
    <a href="#footer" class="hover:italic hover:text-pink-300 transition duration-200 text-right">CONTACTS</a>
</nav>

<style>
a, div {
    z-index: 1;
}
</style>