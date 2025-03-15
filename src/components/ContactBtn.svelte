<script lang="ts">
    let { title, link, icon } = $props();
</script>

<a href="{link}" class="flex items-center bg-black bg-opacity-70 backdrop-blur-2xl rounded-md p-2 overflow-hidden group">
    <img src="{icon}" class="w-8 h-8 filter invert group-hover:mr-2 transition-all duration-200" alt="">
    <span class="text-sm max-w-0 overflow-hidden whitespace-nowrap text-white group-hover:max-w-40 transition-all duration-200">{title}</span>
</a>