<script>
    import starImage from '$lib/assets/textures/star.png';
    import { T, useFrame } from '@threlte/core';
    import { interactivity, useTexture } from '@threlte/extras';
    import { spring } from 'svelte/motion';
    import * as THREE from 'three';

    const galaxySeed = 1337;
    const scale = spring(1);

    interactivity();
    let rotation = 0;
    useFrame((state, delta) => {
        rotation += delta / 128;
    });

    let bufferGeometry;
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
        positions[i] =
            (THREE.MathUtils.seededRandom(i * galaxySeed) - 0.5) * 10;
    }

    $: bufferGeometry?.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );
</script>

<T.PerspectiveCamera
    makeDefault
    position={[3, 3, 3]}
    on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
    }}
/>

<T.Points rotation.y={rotation} position.y={1} scale={$scale}>
    <T.BufferGeometry bind:ref={bufferGeometry} />

    {#await useTexture(starImage) then texture}
        <T.PointsMaterial
            size={0.02}
            sizeAttenuation={true}
            transparent={true}
            alphaMap={texture}
        />
    {/await}
</T.Points>

<T.DirectionalLight position={[3, 10, 7]} />
