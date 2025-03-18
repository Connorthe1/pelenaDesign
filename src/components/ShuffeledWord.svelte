<script>
import {onMount} from "svelte";

const { text } = $props();
let word
onMount(() => {
    const textElement = word;
    const originalText = textElement.textContent;
    let shuffleInterval;
    let timeOut

    textElement.addEventListener('mouseenter', () => {
        // Запускаем перемешивание каждые 100 мс
        shuffleInterval = setInterval(() => {
            textElement.textContent = shuffleString(originalText.length, 'AfCiJoKdSjOkF3p4z9q30fJiKcDlL312UbIn');
        }, 40);

        timeOut = setTimeout(() => {
            clearInterval(shuffleInterval);
            restoreText(textElement, originalText);
        }, 300);
    });

    textElement.addEventListener('mouseleave', () => {
        // Останавливаем перемешивание
        clearInterval(shuffleInterval);

        // Восстанавливаем слово по буквам
        restoreText(textElement, originalText);
    });

    // Функция для перемешивания букв в строке
    function shuffleString(len, str) {
        const arr = str.slice(0, len).split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    // Функция для восстановления текста по буквам
    function restoreText(element, originalText) {
        clearTimeout(timeOut)
        const shuffledText = element.textContent;
        const originalArr = originalText.split('');
        const shuffledArr = shuffledText.split('');

        let index = 0;

        const restoreDuration = 300; // 0.5 секунды
        const interval = restoreDuration / originalText.length;

        const restoreInterval = setInterval(() => {
            if (index >= originalArr.length) {
                clearInterval(restoreInterval);
                return;
            }
            shuffledArr[index] = originalArr[index];
            element.textContent = shuffledArr.join('');
            index++;
        }, interval);
    }
})
</script>

<span bind:this={word}>{ text }</span>