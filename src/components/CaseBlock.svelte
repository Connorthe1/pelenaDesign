<script lang="ts">
import {onMount} from "svelte";

const { title } = $props();
let block

onMount(() => {
    const width = block.clientWidth
    block.style.height = `${width}px`;
})
</script>

<div bind:this={block} class="bg-mainBlack w-full h-96 p-8 text-white flex flex-col gap-2">
    <p class="text-lg">Кейс</p>
    <p class="text-2xl font-semibold">{ title }</p>
</div>

<style>
</style>