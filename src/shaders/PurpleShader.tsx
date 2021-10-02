export const PurpleShader = {
  uniforms: {
    time: { type: 'f', value: 1.0 },
    resolution: { type: 'v2', value: [0, 0, 0] },
  },
  vertexShader: `
    varying mat3 vNormalMatrix;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    void main() {
        vNormalMatrix = normalMatrix;
        vNormal = normal;
        vUv = uv;
        vPosition = position;
        gl_Position += projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
    }
  `,
  fragmentShader: `
    varying mat3 vNormalMatrix;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    uniform vec2 resolution;
    void main(){
        vec2 position = -1.0 + 2.0 * vUv;
        vec4 distColor = vec4(0.0, 0.0, 0.0, 1.0);
        float color = floor(sin(length(position.y * 40.0) - time * 7.5) * 1.5);
        distColor = vec4(color, 1.0, color / 1.5, 1.0);
        gl_FragColor = distColor;
    }
  `,
}
