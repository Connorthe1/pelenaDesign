<script>
    import "../app.css";
    import MainSection from "../components/MainSection.svelte";
    import RunningText from "../components/RunningText.svelte";
    import CaseBlock from "../components/CaseBlock.svelte";
    import Footer from "../components/Footer.svelte";
    import Navigation from "../components/Navigation.svelte";
    import TypingEffectBlock from "../components/TypingEffectBlock.svelte";
    import ContactBlock from "../components/ContactBlock.svelte";
</script>

<Navigation />
<main class="w-full h-full flex flex-col">
    <section class="h-svh">
        <MainSection />
<!--        <ul class="absolute bottom-0 flex items-center h-20 text-white px-[80px] inset-x-0 bg-mainBlack gap-8 justify-end">-->
<!--            <li class="flex items-center gap-2">-->
<!--                <img src="src/assets/TG.svg" class="filter invert h-10" alt="">-->
<!--            </li>-->
<!--            <li class="flex items-center gap-2">-->
<!--                <img src="src/assets/linkedin.svg" class="filter invert h-10" alt="">-->
<!--            </li>-->
<!--            <li class="flex items-center gap-2">-->
<!--                <img src="src/assets/mail.svg" class="filter invert h-10" alt="">-->
<!--            </li>-->
<!--        </ul>-->
    </section>

    <section class="bg-black bg-opacity-95 py-2 gap-4">
        <RunningText />

        <h1 class="text-white text-[60px] px-[80px] mt-12">
            <div class="flex gap-4">CREATING NEW <TypingEffectBlock /> FROM SCRATCH</div>
        </h1>
        <ContactBlock />
        <h2 class="text-white text-[32px] px-[80px] mt-4">Design and Front-End</h2>

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
