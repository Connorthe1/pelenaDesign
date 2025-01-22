<script>
  import "../app.css";
  import {onMount} from "svelte";

</script>

<main>
    <div class="wrapper">
        <div class="image-wrapper">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    </div>
    <svg>
        <filter id="filter">
            <feTurbulence id="turbulence" type="turbulence" numOctaves="1"
                          result="NOISE"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="10">
            </feDisplacementMap>
            <animate xlink:href="#turbulence" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
                     values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
        </filter>
    </svg>
</main>

<style lang="postcss">
    .wrapper {
        width: 100%;
        height: 1024px;
        overflow: hidden;
    }

    .image-wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(33, auto);
        background: black;
        /*   filter: url(#filter); */
        transition: all 1s ease-in-out;
        transform-origin: 55% 25%;
        image-rendering: high-quality;
    }

    .cell {
        background-image: url('https://framerusercontent.com/images/GUQ2BjPUcUpVAvZ0MJwnVNmHQI.png?scale-down-to=1024');
        background-size: 800% 100%;
        background-repeat: no-repeat;
        position: relative;
        image-rendering: high-quality;
    }

    .cell::after {
        content: '';
        position: absolute;
        left: 70%;
        background-image: url('https://framerusercontent.com/images/GUQ2BjPUcUpVAvZ0MJwnVNmHQI.png?scale-down-to=1024');
        background-size: 1400% 100%;
        background-repeat: no-repeat;
        transform: scaleX(-1);
        width: 35%;
        height: 100%;
        image-rendering: high-quality;
    }

    .cell:nth-of-type(1) {
        background-position: 1.5% 50%;
    }

    .cell:nth-of-type(1)::after {
        background-position: 3% 50%;
    }

    .cell:nth-of-type(2) {
        background-position: 4.5% 50%;
    }

    .cell:nth-of-type(2)::after {
        background-position: 6% 50%;
    }

    .cell:nth-of-type(3) {
        background-position: 7.5% 50%;
    }

    .cell:nth-of-type(3)::after {
        background-position: 9% 50%;
    }

    .cell:nth-of-type(4) {
        background-position: 10.5% 50%;
    }

    .cell:nth-of-type(4)::after {
        background-position: 12% 50%;
    }

    .cell:nth-of-type(5) {
        background-position: 13.5% 50%;
    }

    .cell:nth-of-type(5)::after {
        background-position: 15% 50%;
    }

    .cell:nth-of-type(6) {
        background-position: 16.5% 50%;
    }

    .cell:nth-of-type(6)::after {
        background-position: 18% 50%;
    }

    .cell:nth-of-type(7) {
        background-position: 19.5% 50%;
    }

    .cell:nth-of-type(7)::after {
        background-position: 21% 50%;
    }

    .cell:nth-of-type(8) {
        background-position: 22.5% 50%;
    }

    .cell:nth-of-type(8)::after {
        background-position: 24% 50%;
    }

    .cell:nth-of-type(9) {
        background-position: 25.5% 50%;
    }

    .cell:nth-of-type(9)::after {
        background-position: 27% 50%;
    }

    .cell:nth-of-type(10) {
        background-position: 28.5% 50%;
    }

    .cell:nth-of-type(10)::after {
        background-position: 30.5% 50%;
    }

    .cell:nth-of-type(11) {
        background-position: 31.5% 50%;
    }

    .cell:nth-of-type(11)::after {
        background-position: 33% 50%;
    }

    .cell:nth-of-type(12) {
        background-position: 34.5% 50%;
    }

    .cell:nth-of-type(12)::after {
        background-position: 36% 50%;
    }

    .cell:nth-of-type(13) {
        background-position: 37.5% 50%;
    }

    .cell:nth-of-type(13)::after {
        background-position: 39% 50%;
    }

    .cell:nth-of-type(14) {
        background-position: 40.5% 50%;
    }

    .cell:nth-of-type(14)::after {
        background-position: 42% 50%;
    }

    .cell:nth-of-type(15) {
        background-position: 43.5% 50%;
    }

    .cell:nth-of-type(15)::after {
        background-position: 45% 50%;
    }

    .cell:nth-of-type(16) {
        background-position: 46.5% 50%;
    }

    .cell:nth-of-type(16)::after {
        background-position: 48% 50%;
    }

    .cell:nth-of-type(17) {
        background-position: 49.5% 50%;
    }

    .cell:nth-of-type(17)::after {
        background-position: 51% 50%;
    }

    .cell:nth-of-type(18) {
        background-position: 52.5% 50%;
    }

    .cell:nth-of-type(18)::after {
        background-position: 54% 50%;
    }

    .cell:nth-of-type(19) {
        background-position: 55.5% 50%;
    }

    .cell:nth-of-type(19)::after {
        background-position: 57% 50%;
    }

    .cell:nth-of-type(20) {
        background-position: 58.5% 50%;
    }

    .cell:nth-of-type(20)::after {
        background-position: 60% 50%;
    }

    .cell:nth-of-type(21) {
        background-position: 61.5% 50%;
    }

    .cell:nth-of-type(21)::after {
        background-position: 63% 50%;
    }

    .cell:nth-of-type(22) {
        background-position: 64.5% 50%;
    }

    .cell:nth-of-type(22)::after {
        background-position: 66% 50%;
    }

    .cell:nth-of-type(23) {
        background-position: 67.5% 50%;
    }

    .cell:nth-of-type(23)::after {
        background-position: 69% 50%;
    }

    .cell:nth-of-type(24) {
        background-position: 70.5% 50%;
    }

    .cell:nth-of-type(24)::after {
        background-position: 72% 50%;
    }

    .cell:nth-of-type(25) {
        background-position: 73.5% 50%;
    }

    .cell:nth-of-type(25)::after {
        background-position: 75% 50%;
    }

    .cell:nth-of-type(26) {
        background-position: 76.5% 50%;
    }

    .cell:nth-of-type(26)::after {
        background-position: 78% 50%;
    }

    .cell:nth-of-type(27) {
        background-position: 79.5% 50%;
    }

    .cell:nth-of-type(27)::after {
        background-position: 81% 50%;
    }

    .cell:nth-of-type(28) {
        background-position: 82.5% 50%;
    }

    .cell:nth-of-type(28)::after {
        background-position: 84% 50%;
    }

    .cell:nth-of-type(29) {
        background-position: 85.5% 50%;
    }

    .cell:nth-of-type(29)::after {
        background-position: 87% 50%;
    }

    .cell:nth-of-type(30) {
        background-position: 88.5% 50%;
    }

    .cell:nth-of-type(30)::after {
        background-position: 90% 50%;
    }

    .cell:nth-of-type(31) {
        background-position: 91.5% 50%;
    }

    .cell:nth-of-type(31)::after {
        background-position: 93% 50%;
    }

    .cell:nth-of-type(32) {
        background-position: 94.5% 50%;
    }

    .cell:nth-of-type(32)::after {
        background-position: 96% 50%;
    }

    .cell:nth-of-type(33) {
        background-position: 97.5% 50%;
    }

    .cell:nth-of-type(33)::after {
        background-position: 99% 50%;
    }
</style>
