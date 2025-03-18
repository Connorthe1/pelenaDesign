<script lang="ts">
import {onMount} from "svelte";

const { title, img, classes = 'text-white' } = $props();
let block

onMount(() => {
    const width = block.clientWidth
    block.style.height = `${width}px`;
})
</script>

<div bind:this={block} style="{img ? `background-image: url(/assets/${img}.png); background-size: cover;` : ''}" class="{`${classes} bg-mesh w-full h-96 p-8 flex flex-col gap-2 relative`}">
    <p class="text-lg">Кейс</p>
    <p class="text-2xl font-semibold">{ title }</p>
</div>

<style>
</style>