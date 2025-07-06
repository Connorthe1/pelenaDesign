<script>

import "../app.css";
import CaseBlock from "../components/CaseBlock.svelte";
import Footer from "../components/Footer.svelte";
import Navigation from "../components/Navigation.svelte";
import ToolsBlock from "../components/ToolsBlock.svelte";
import MainSectionNew from "../components/MainSectionNew.svelte";

</script>

<Navigation />
<main id="main" class="w-full h-full flex flex-col bg-mainBlack pt-[80px]">
    <section class="mb-12">
        <MainSectionNew />
    </section>

    <section class="py-2 gap-4 z-10 px-global">
<!--        <ContactBlock />-->
<!--        <div class="flex justify-between items-center xl:items-end px-[20px] xl:px-[80px] mt-6">-->
<!--            <h2 class="text-white text-[24px] xl:text-[32px]">Design and Front-End</h2>-->
<!--            <img src="assets/FW-SHAPE-39.svg" class="opacity-20 h-4" alt="">-->
<!--        </div>-->

        <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col"> <CaseBlock title="SOON"/></div>
            <div class="flex flex-col"> <CaseBlock title="SOON"/></div>
            <div class="flex flex-col"> <CaseBlock title="SOON"/></div>
        </div>

        <ToolsBlock />
    </section>

    <Footer />
</main>

<style lang="postcss">
</style>
