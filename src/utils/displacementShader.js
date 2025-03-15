const displacementShader = {
    uniforms: {
        // tDiffuse is the texture that the shader will be applied to, in this case the Three.js scene
        tDiffuse: { value: null },
        // displacement is the texture that will be used to displace the pixels
        displacement: { value: null },
        // scale is the intensity of the displacement
        scale: { value: 0.1 },
        // tileFactor is the number of times the texture will be repeated across the screen
        tileFactor: { value: 2 }
    },
    // This particular vertex shader is basically a Three.js specific boilerplate code
    //It allows us to connect the vertex shader to the Three.js scene
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    // The fragment shader determines the color of each pixel on the screen
    // Here we are displacing the pixels based on the displacement texture
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D displacement;
        uniform float scale;
        uniform float tileFactor;
        varying vec2 vUv;
        void main() {
            // We use the conditional here to apply the displacement only to part of the scene/screen
            // You can simply cut the if condition and apply the displacement to the entire screen

            if (vUv.x < 1.75 && vUv.x > -0.25 && vUv.y < 1.75 && vUv.y > -0.25) {
                vec2 tiledUv = mod(vUv * tileFactor, 1.0);
                vec2 disp = texture2D(displacement, tiledUv).rg * scale;
                vec2 distUv = vUv + disp;

                // By setting gl_FragColor to the displacement texture accross the distibuted UVs we get the displacement effect
                // You can check the texture by simply substituting the 'tDiffuse' with 'displacement'

                gl_FragColor = texture2D(tDiffuse, distUv);
            } else {
                gl_FragColor = texture2D(tDiffuse, vUv);  // No displacement on the right half
            }
        }
    `
}

const vertexGradientShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentGradientShader = `
varying vec2 vUv;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform float noiseStrength;
uniform float time;

void main() {
    // Анимация через time
    float waveSpeed = 0.5; // Скорость анимации
    float baseFrequency = 2.0; // Базовая частота волн
    float baseAmplitude = 0.5; // Базовая амплитуда волн

    // Изменение толщины и высоты волн по оси X
    float frequency = baseFrequency + vUv.x * 5.0; // Частота увеличивается по оси X
    float amplitude = baseAmplitude + vUv.x * 0.5; // Амплитуда увеличивается по оси X

    // Создание волнообразного эффекта
    float wave = sin(vUv.x * frequency + time * waveSpeed) * amplitude;

    // Смешивание цветов на основе волн и шума
    float threshold = 0.5; // Порог для резкого перехода
    float t1 = smoothstep(threshold - 0.3, threshold + 0.3, vUv.y + wave);
    float t2 = smoothstep(0.9, 1.8, vUv.y + wave);
    vec3 gradient = mix(color1, color2, t1);
    gradient = mix(gradient, color3, t2);

    // Установка цвета пикселя
    gl_FragColor = vec4(gradient, 1.0);
}
`;

export { displacementShader, vertexGradientShader, fragmentGradientShader };