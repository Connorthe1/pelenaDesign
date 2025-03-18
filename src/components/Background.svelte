<script>
    import * as THREE from "three";
    import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
    import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
    import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
    import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
    import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js"
    import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
    import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
    import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
    import { displacementShader, vertexGradientShader, fragmentGradientShader } from '../utils/displacementShader.js'
    import {onMount} from "svelte";

    onMount(async () => {
        const glassEl = document.querySelector("#glass");

        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        // renderer.setClearColor(0x11151c);
        renderer.setSize(glassEl.clientWidth, glassEl.clientHeight);
        glassEl.appendChild(renderer.domElement);

        const uniforms = {
            color1: { value: new THREE.Color(0x333333) },
            color2: { value: new THREE.Color(0xedc8f6) },
            color3: { value: new THREE.Color(0xf51d23) },
            noiseStrength: { value: 0 },
            time: { value: 0 },
        };

        const bgMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexGradientShader,
            fragmentShader: fragmentGradientShader,
            uniforms
        });

        const geometry = new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 25);
        const bgPlane = new THREE.Mesh(geometry, bgMaterial);
        bgPlane.position.set(0,0,-35)
        scene.add(bgPlane);

        // Camera position
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        camera.position.set(0, 0, 10);

        const hdrEquirect = new RGBELoader()
            .setPath("https://miroleon.github.io/daily-assets/")
            .load("GRADIENT_01_01_comp.hdr", function () {
                hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
            });

        // Add the HDR to the scene
        scene.environment = hdrEquirect;

        // Add some fog to the scene for moodyness
        scene.fog = new THREE.Fog(0x11151c, 1, 100);
        scene.fog = new THREE.FogExp2(0x11151c, 0.4);

        // Set bloom parameters
        const bloomparams = {
            exposure: 1,
            bloomStrength: 0.25,
            bloomThreshold: 0.01,
            bloomRadius: 0.5
        };

// Create a new bloom pass
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5,
            0.4,
            0.85
        );
        bloomPass.threshold = bloomparams.bloomThreshold;
        bloomPass.strength = bloomparams.bloomStrength;
        bloomPass.radius = bloomparams.bloomRadius;

        const displacementTexture = new THREE.TextureLoader().load(
            "/assets/displacement.png",
            function (texture) {
                // By setting minFilter to THREE.NearestFilter we can prevent some tiling issues with the displacement texture
                texture.minFilter = THREE.NearestFilter;
            }
        );

        const displacementPass = new ShaderPass(displacementShader);
        displacementPass.uniforms["displacement"].value = displacementTexture;
        displacementPass.uniforms["scale"].value = 0.015;
        displacementPass.uniforms["tileFactor"].value = 1.5;

        const renderScene = new RenderPass(scene, camera);

// Create a new afterimage pass
        const afterimagePass = new AfterimagePass();
        afterimagePass.uniforms["damp"].value = 0.9;

        let composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(afterimagePass);
        composer.addPass(bloomPass);
        composer.addPass(displacementPass);

// Add the displacement pass to the composer

        // TEXT
        let textMesh
        const fontLoader = new FontLoader();
        fontLoader.load(
            "/assets/font.json",
            (font) => {
                // Создаем геометрию текста
                const textGeometry = new TextGeometry("PELENA", {
                    font: font,
                    size: 1, // Размер текста
                    depth: 0.3, // Глубина текста

                    bevelSegments: 1, // Качество фаски
                });

                // Материал текста
                textMesh = new THREE.Mesh(textGeometry);
                // textMesh = new THREE.Mesh(textGeometry, new THREE.MeshNormalMaterial());

                // Размещаем текст на фоне
                textMesh.position.set(-2.2, -0.1, 3); // Центрируем за объектами
                scene.add(textMesh);
            }
        );

        let mouseX = 0;
        let mouseY = 0;

// Функция для обработки событий мыши
        function onMouseMove(event) {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Преобразование в диапазон [-1, 1]
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        }

// Добавляем слушатель событий мыши
        window.addEventListener('mousemove', onMouseMove);

// Функция для обновления mesh на основе параллакса
        function applyParallax(mesh, intensity = 0.4) {
            if (!mesh) return;

            // Обновляем положение или вращение объекта
            mesh.position.y += -0.015 + (-mouseY * intensity - mesh.position.y) * 0.1;
            mesh.position.x += -0.22 + (-mouseX * intensity - mesh.position.x) * 0.1;

            // Дополнительно можно изменять позицию объекта:
            // mesh.position.x += (mouseX * intensity - mesh.position.x) * 0.1;
            // mesh.position.y += (mouseY * intensity - mesh.position.y) * 0.1;
        }

        window.addEventListener("resize", onWindowResize);

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        }

        // Анимация
        function animate() {
            requestAnimationFrame(animate);
            uniforms.time.value += 0.005;
            applyParallax(textMesh);
            // Make sure to update the composer
            composer.render();

        }

        animate()
    })
</script>

<div id="glass" class="w-full h-full absolute"></div>

<style lang="postcss">
</style>
