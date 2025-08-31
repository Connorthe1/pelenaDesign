<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Navigation from "../components/Navigation.svelte";
    import MainSectionNew from "../components/MainSectionNew.svelte";
    import WorkBlock from "../components/WorkBlock.svelte";
</script>

<Navigation/>
<main id="main" class="h-full flex flex-col pt-[100px] xl:pt-[120px]">
    <div class="absolute px-1 py-3 rounded-full border border-white/25 bg-white/15 shadow-lg backdrop-blur-[2px] bottom-10 self-center animate-bounce">
        <img src="assets/ArrowDown.svg" class="w-6 h-5 filter invert" alt="">
    </div>
    <section class="mb-8 xl:mb-20 max-w-work xl:w-full mx-4 xl:mx-auto">
        <MainSectionNew/>
    </section>

    <WorkBlock/>

    <Footer/>
</main>

<style lang="postcss">
</style>
