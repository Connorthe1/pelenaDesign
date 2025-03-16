<script>
import {onMount} from "svelte";

onMount(() => {
    const runningImage = document.querySelector('.running-image');
    const images = document.querySelectorAll('.running-image img');
    const imageWidth = images[0].clientWidth; // Ширина одной картинки
    let position = 0; // Текущая позиция
    const speed = 0.25; // Скорость движения

    function animate() {
        position -= speed; // Двигаем картинки влево
        if (position <= -imageWidth) {
            // Если первая картинка полностью ушла за левый край экрана,
            // перемещаем её в конец
            position += imageWidth;
            runningImage.appendChild(images[0]);
        }
        runningImage.style.transform = `translateY(-50%) translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    // Запуск анимации
    animate();
})
</script>

<div class="relative">
    <div class="running-image flex absolute opacity-20">
        <img src="src/assets/Y2KLINE.svg" class="h-[32px]" alt="">
        <img src="src/assets/Y2KLINE.svg" class="h-[32px]" alt="">
        <img src="src/assets/Y2KLINE.svg" class="h-[32px]" alt="">
    </div>
</div>

<style>
</style>

