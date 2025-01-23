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
uniform float noiseStrength;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}

void main() {
    vec3 gradient = mix(color1, color2, vUv.y);
    float n = noise(vUv * 10.0) * noiseStrength;
    gl_FragColor = vec4(gradient + vec3(n), 1.0);
}
`;

export { displacementShader, vertexGradientShader, fragmentGradientShader };