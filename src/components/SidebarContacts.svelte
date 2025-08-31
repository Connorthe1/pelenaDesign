<script>
    import { onMount, onDestroy } from "svelte";

    let offsetX = 0;
    let offsetY = 0;
    let targetX = 0;
    let targetY = 0;
    let rotateY = 0;
    let rotateX = 0;
    let targetRotateY = 0;
    let targetRotateX = 0;
    let animationFrame;

    const maxOffset = 30;   // максимальное смещение (px)
    const maxRotate = 20;   // максимальный угол наклона (deg)
    const delay = 0.02;     // скорость догоняния (чем меньше — тем сильнее задержка)

    function handleMouseMove(event) {
        const { innerWidth, innerHeight } = window;

        // нормализуем координаты [-1, 1]
        const normX = (event.clientX / innerWidth) * 2 - 1;
        const normY = (event.clientY / innerHeight) * 2 - 1;

        // инвертируем движение
        targetX = -normX * maxOffset;
        targetY = -normY * maxOffset;

        targetRotateY = -normX * maxRotate;
        targetRotateX = -normY * maxRotate;
    }

    function animate() {
        // плавное догоняющее движение с задержкой
        offsetX += (targetX - offsetX) * delay;
        offsetY += (targetY - offsetY) * delay;
        rotateY += (targetRotateY - rotateY) * delay;
        rotateX += (targetRotateX - rotateX) * delay;

        animationFrame = requestAnimationFrame(animate);
    }

    onMount(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 1200) {
                window.addEventListener("mousemove", handleMouseMove);
                animationFrame = requestAnimationFrame(animate);
            }
        }
    });
</script>

<div style="transform: translate({offsetX}px, {offsetY}px) rotateX({rotateX}deg) rotateY({rotateY}deg);" class="flex xl:grid xl:grid-cols-2 xl:grid-rows-2 mt-6 xl:mt-0 gap-4 xl:mr-20" >
    <a href="https://t.me/connorthe1" target="_blank" class="glass-border w-16 h-16 xl:w-20 xl:h-20 p-3 bg-white/15 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-rotate-6 flex items-center justify-center">
        <img src="/assets/TG.svg" class="filter invert opacity-90" alt="">
    </a>
    <a href="https://www.linkedin.com/in/andrew-melnik/" target="_blank" class="glass-border w-16 h-16 xl:w-20 xl:h-20 p-3 bg-white/15 transition-all duration-300 ease-in-out hover:translate-x-2 hover:rotate-6 flex items-center justify-center">
        <img src="/assets/linkedin.svg" class="filter invert opacity-90" alt="">
    </a>
    <a href="mailto:andrew_muller@vk.com" target="_blank" class="glass-border w-16 h-16 xl:w-20 xl:h-20 p-3 bg-white/15 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-rotate-6 flex items-center justify-center">
        <img src="/assets/mail.svg" class="filter invert opacity-90" alt="">
    </a>
    <a href="assets/resume.pdf" target="_blank" class="glass-border w-16 h-16 xl:w-20 xl:h-20 p-3 bg-white/15 transition-all duration-300 ease-in-out hover:translate-x-2 hover:rotate-6 flex items-center justify-center">
        <img src="/assets/resume.svg" class="opacity-90 w-10" alt="">
    </a>
</div>

<style>
    .glass-border {
        position: relative;
        padding: 14px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.1); /* полупрозрачное стекло */
        backdrop-filter: blur(10px);
        overflow: hidden; /* чтобы градиент не выступал за углы */
    }

    .glass-border:hover::before {
        background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0.8)
        );
        transition: all 300ms;
    }

    .glass-border::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: 24px;
        padding: 2px; /* ширина границы */
        background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0)
        );
        -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude; /* скрываем внутреннюю часть, оставляем только границу */
        pointer-events: none;
        transition: all 300ms;
    }
</style>