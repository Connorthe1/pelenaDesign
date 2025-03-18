<script>
    import "../app.css";
    import MainSection from "../components/MainSection.svelte";
    import CaseBlock from "../components/CaseBlock.svelte";
    import Footer from "../components/Footer.svelte";
    import Navigation from "../components/Navigation.svelte";
    import TypingEffectBlock from "../components/TypingEffectBlock.svelte";
    import ContactBlock from "../components/ContactBlock.svelte";
    import ToolsBlock from "../components/ToolsBlock.svelte";
</script>

<Navigation />
<main id="main" class="w-full h-full flex flex-col">
    <section class="h-svh">
        <MainSection />
    </section>

    <section class="bg-black bg-opacity-95 py-2 gap-4">
        <h1 class="text-white text-[60px] px-[80px]">
            <span class="flex gap-4">CREATING NEW <TypingEffectBlock /> FROM SCRATCH</span>
        </h1>
        <ContactBlock />
        <div class="flex justify-between items-end px-[80px] mt-6">
            <h2 class="text-white text-[32px]">Design and Front-End</h2>
            <img src="/assets/FW-SHAPE-39.svg" class="opacity-20 h-4" alt="">
        </div>

        <div class="grid p-[1px] gap-[1px] grid-cols-2 2xl:grid-cols-3 bg-white mx-[80px] mt-4">
            <CaseBlock title="SOON"/>
            <CaseBlock img="rstakePreview" title="Разработка дизайна и Front-End части для крипто-проекта RStake"/>
            <CaseBlock img="restoclubPreview" title="Разработка веб-приложения для заметок ресторанов RestoClub"/>
            <CaseBlock img="alliancePreview" title="Дизайн и разработка сайта с полным сопровождением для ремонтной компании АльянсСтрой"/>
            <CaseBlock img="SKSPreview" classes="text-black" title="Полный цикл создания и разработки мобильной игры Street Killers Showdown"/>
            <CaseBlock title="Разработка музыкального портала Musicamp"/>
        </div>

        <ToolsBlock />
    </section>

    <Footer />
</main>

<style lang="postcss">
</style>
