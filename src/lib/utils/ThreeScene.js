import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.13,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const directionalLight = new THREE.DirectionalLight(0x9090aa);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

let renderer;

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

export const createScene = (el) => {
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: el,
    });
    resize();
    animate();

    let particleSystem, uniforms, geometry;

    const particles = 100000;

    uniforms = {
        pointTexture: {
            value: new THREE.TextureLoader().load(
                'textures/sprites/spark1.png'
            ),
        },
    };

    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexshader').textContent,
        fragmentShader: document.getElementById('fragmentshader').textContent,

        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true,
    });

    const radius = 200;

    geometry = new THREE.BufferGeometry();

    const positions = [];
    const colors = [];
    const sizes = [];

    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
        positions.push((Math.random() * 2 - 1) * radius);
        positions.push((Math.random() * 2 - 1) * radius);
        positions.push((Math.random() * 2 - 1) * radius);

        color.setHSL(i / particles, 1.0, 0.5);

        colors.push(color.r, color.g, color.b);

        sizes.push(20);
    }

    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute(
        'size',
        new THREE.Float32BufferAttribute(sizes, 1).setUsage(
            THREE.DynamicDrawUsage
        )
    );

    particleSystem = new THREE.Points(geometry, shaderMaterial);
    scene.add(particleSystem);

    return scene;
};

window.addEventListener('resize', resize);
