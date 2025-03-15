<script>
    import {onMount} from "svelte";

    onMount(() => {
        const marqueeContainer = document.querySelector('.marquee-container');
        const marquee = document.querySelector('.marquee');

// Исходный текст для бегущей строки
        const htmlContent  = `<div style="color: #ededed" class="flex font-bold gap-4 items-center">
                <svg width="527" height="160" viewBox="0 0 527 160" fill="#ededed" xmlns="http://www.w3.org/2000/svg" class="w-12 h-5">
<path d="M131.5 0H188.225L282.5 160H225.775L131.5 0Z" fill="inherit"/>
<path d="M18.5 0H75.2249L169.5 160H112.775L18.5 0Z" fill="inherit"/>
<path d="M244.5 0H301.225L395.5 160H338.775L244.5 0Z" fill="inherit"/>
<path d="M357.5 0H414.225L508.5 160H451.775L357.5 0Z" fill="inherit"/>
<path d="M0 64V160H56.5L0 64Z" fill="inherit"/>
<path d="M527 96L527 0L470.5 4.93939e-06L527 96Z" fill="inherit"/>
</svg>
                <span>WARNING</span>
                <span>·</span>
                <span>警告</span>
                <span>·</span>
                <span>ОСТОРОЖНО</span>
                <svg width="527" height="160" viewBox="0 0 527 160" fill="#ededed" stroke="#ededed" xmlns="http://www.w3.org/2000/svg" class="w-14 h-6">
<rect y="140" width="527" height="20" fill="inherit"/>
<rect width="527" height="20" fill="inherit"/>
<line x1="14.7574" y1="109.757" x2="82.7574" y2="41.7574" stroke="inherit" stroke-width="12"/>
<line x1="14.2426" y1="41.7574" x2="82.2426" y2="109.757" stroke="inherit" stroke-width="12"/>
<line x1="444.757" y1="109.757" x2="512.757" y2="41.7574" stroke="inherit" stroke-width="12"/>
<line x1="444.243" y1="41.7574" x2="512.243" y2="109.757" stroke="inherit" stroke-width="12"/>
<line x1="337.757" y1="109.757" x2="405.757" y2="41.7574" stroke="inherit" stroke-width="12"/>
<line x1="337.243" y1="41.7574" x2="405.243" y2="109.757" stroke="inherit" stroke-width="12"/>
<line x1="230.757" y1="109.757" x2="298.757" y2="41.7574" stroke="inherit" stroke-width="12"/>
<line x1="230.243" y1="41.7574" x2="298.243" y2="109.757" stroke="inherit" stroke-width="12"/>
<line x1="122.757" y1="109.757" x2="190.757" y2="41.7574" stroke="inherit" stroke-width="12"/>
<line x1="122.243" y1="41.7574" x2="190.243" y2="109.757" stroke="inherit" stroke-width="12"/>
</svg>
<span>WARNING</span>
                <span>·</span>
                <span>警告</span>
                <span>·</span>
                <span>ОСТОРОЖНО</span>
            </div>`
        marquee.innerHTML = htmlContent ;

// Дублирование текста до тех пор, пока его ширина меньше ширины контейнера
        while (marquee.offsetWidth < marqueeContainer.offsetWidth * 2) {
            marquee.innerHTML += htmlContent;
        }

// Настройка скорости движения (чем меньше значение, тем быстрее)
        const speed = 1; // Скорость в пикселях за секунду
        let position = 0;

// Анимация движения текста
        function animateMarquee() {
            position -= speed; // Сдвиг влево
            if (Math.abs(position) >= marquee.offsetWidth / 2) {
                position = 0; // Сброс позиции для бесшовного эффекта
            }
            marquee.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animateMarquee);
        }

// Запуск анимации
        animateMarquee();
    })


</script>

<div class="marquee-container">
    <div class="marquee">
        <slot />
    </div>
</div>

<style>
    .marquee-container {
        overflow: hidden; /* Прячем текст, выходящий за границы */
        width: 100%; /* Контейнер занимает всю ширину экрана */
        height: 40px; /* Высота контейнера */
        position: relative;
        display: flex;
        align-items: center; /* Центрирование текста по вертикали */
    }

    .marquee {
        white-space: nowrap; /* Текст не переносится на новую строку */
        display: flex;
        gap: 12px;
        position: absolute;
        will-change: transform; /* Оптимизация анимации */
    }
</style>

