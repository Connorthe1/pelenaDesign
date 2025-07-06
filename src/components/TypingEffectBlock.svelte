<script>
import {onMount} from "svelte";

let block
onMount(() => {
    const textElement = block;
    const words = ["всяких штук", "мобильных приложений", "дизайнов интерфейса", "веб-сайтов", "3d моделей"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        // Определяем текущий текст в зависимости от того, печатаем или стираем
        const currentText = isDeleting
            ? currentWord.substring(0, charIndex - 1)
            : currentWord.substring(0, charIndex + 1);

        textElement.textContent = currentText;

        if (currentText === currentWord || currentText === '') {
            textElement.classList.add('line-blinking')
        } else {
            textElement.classList.remove('line-blinking')
        }

        if (!isDeleting && currentText === currentWord) {
            // Если слово полностью напечатано, ждем 2 секунду и начинаем стирать
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && currentText === '') {
            // Если слово полностью стерто, переходим к следующему слову
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0; // Сбрасываем индекс символа для нового слова
            setTimeout(typeEffect, getRandomNumber(400, 700)); // Задержка перед началом печати нового слова
            return;
        }

        // Обновляем индекс символа
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

        // Скорость печати и стирания
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, typingSpeed);
    }

    // Запуск эффекта
    typeEffect();
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<span bind:this={block} class="text-accentColor type-line relative"></span>

<style>
</style>