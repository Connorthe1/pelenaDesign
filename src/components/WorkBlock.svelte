<script>
    import ToolsBlock from "./ToolsBlock.svelte";
    import CaseBlock from "./CaseBlock.svelte";
    import CaseSkipBlock from "./CaseSkipBlock.svelte";
    import {onMount} from "svelte";

    let show = false

    function handleScroll(value) {
        if (value > 20) {
            show = true
        }
        window.removeEventListener("scroll", handleScroll);
    }

    onMount(() => {
        window.addEventListener('scroll', () => handleScroll(window.scrollY))
    })
</script>

<section id="works" class="py-2 gap-4 z-10 max-w-work mx-auto slide-in" class:show>
    <div class="flex flex-col xl:grid xl:grid-cols-5 gap-6 mb-14">
        <CaseBlock img="/assets/works/ankquoPreview.gif" color="bg-white/80" classList="col-span-3" title="Ankquo" tag="tilda" description="Интернет магазин одежды на Tilda" />
        <CaseBlock img="/assets/works/platiPreview.png" color="bg-[#F2D0AE]" classList="col-span-2" title="AI-icons" description="Набор карточек для товаров на plati market" />
        <CaseBlock img="/assets/works/SKSPreview.gif" color="bg-white/10" classList="col-span-2" title="Street Killers Showdown" description="Экшн игра жанра Endless Runner для мобильных устройств" />
        <CaseSkipBlock />
        <CaseBlock img="/assets/works/parserPreview.gif" color="bg-white/5" classList="col-span-2" title="Yandex Parser" tag="pet project" description="Парсер цен Яндекс.Маркета для разных аккаунтов" />
        <CaseBlock img="/assets/works/restocampPreview.gif" color="bg-[#536988]" classList="col-span-2" title="Restocamp" tag="pet project" description="Соцсеть заведений с заметками" />
        <CaseBlock img="/assets/works/alliancePreview.gif" color="bg-[#B89D84]" classList="col-span-3" title="АльянсСтрой" description="Разработка лендинга для строительной компании" />
    </div>

    <h2 class="text-white text-2xl mb-4 ml-4 xl:ml-0">Места работы</h2>
    <div class="flex flex-col xl:grid xl:grid-cols-5 gap-6 mb-14">
        <CaseBlock img="/assets/works/rzd.jpg" color="bg-[#e21a1a]" classList="col-span-2" title="РЖД" tag="current" description="Автоматизированная система ведения графика ГИД НП" />
        <CaseSkipBlock />
        <CaseBlock img="/assets/works/keyauto.jpg" color="bg-[#ffffff]" classList="col-span-2" title="РОЛЬФ" description="Сайт каталог авто keyauto.ru" />
    </div>

<!--    <ToolsBlock/>-->
</section>

<style>
    .slide-in {
        opacity: 0;
        transform: translateY(-5%);
        transition: opacity .3s ease-in, transform .3s ease-out;
    }

    .slide-in.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 600px) {
        .slide-in {
            transform: translateY(-2%);
            transition: opacity .4s ease-in, transform .4s ease-out;
        }
    }
</style>