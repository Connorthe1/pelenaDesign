<script>
    import "../app.css";
    import MainSection from "../components/MainSection.svelte";
    import RunningText from "../components/RunningText.svelte";
    import CaseBlock from "../components/CaseBlock.svelte";
    import Footer from "../components/Footer.svelte";
    import Navigation from "../components/Navigation.svelte";
</script>

<Navigation />
<main class="w-full h-full flex flex-col">
    <MainSection />

    <section class="h-svh bg-black bg-opacity-95 py-2 gap-4">
        <RunningText />

        <div class="grid p-[1px] gap-[1px] grid-cols-3 bg-white mx-[80px] mt-8">
            <CaseBlock title="Разработка веб-приложения для заметок ресторанов RestoClub"/>
            <CaseBlock title="Разработка дизайна и Front-End части для крипто-проекта RStake"/>
            <CaseBlock title="Дизайн и разработка сайта с полным сопровождением для ремонтной компании АльянсСтрой"/>
            <CaseBlock title="Полный цикл создания и разработки мобильной игры Street Killers Showdown"/>
            <CaseBlock title="Разработка музыкального портала Musicamp"/>
            <CaseBlock title="SOON"/>
        </div>
    </section>

    <Footer />
</main>

<style lang="postcss">
</style>
