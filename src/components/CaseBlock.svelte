<script lang="ts">

const { img, title, description, classList, color, skip, tag } = $props();
</script>

<div class={['flex flex-col relative', classList]}>
    <div class={['p-4 xl:h-96 flex items-center justify-center', color, !skip ? 'bg-gr' : '']}>
        <img src="{img}" class="max-h-96 xl:h-full object-cover shadow-xl" alt="">
    </div>
    <span class="text-white mt-2 font-roboto ml-4 xl:ml-0">{ title }</span>
    <span class="text-gray-500 font-roboto text-sm ml-4 xl:ml-0">{ description }</span>
    {#if tag}
        <span class="absolute left-5 top-5 bg-black/40 text-white rounded-full px-4 py-2 text-sm font-roboto">{ tag }</span>
    {/if}
</div>

<style>
    .bg-gr {
        position: relative;
        transition: all 0.3s ease;
    }

    .bg-gr::before {
        content: "";
        position: absolute;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        padding: 3px; /* отступ от блока */
        background: linear-gradient(45deg, #FF005E, #EF9825, #F04E21, #F447FA);
        -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .bg-gr:hover::before {
        opacity: 1;
    }

    @media (max-width: 600px) {
        .bg-gr::before {
            background: none;
        }
    }
</style>