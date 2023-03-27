<script>
    import starImage from '$lib/assets/textures/star.png';
    import { T, useFrame } from '@threlte/core';
    import { interactivity, OrbitControls, useTexture } from '@threlte/extras';
    import * as THREE from 'three';

    interactivity();
    let rotation = 0;
    useFrame((state, delta) => {
        // rotation += delta / 1024;
    });

    const params = {
        galaxySeed: 1337,
        starCount: 1000,
        starSize: 0.01,
        radius: 3,
        branches: 3,
    };

    let bufferGeometry;
    let positions = new Float32Array(params.starCount * 3);

    const createGalaxy = () => {
        for (let i = 0; i < params.starCount * 3; i++) {
            const i3 = i * 3;
            const radius =
                THREE.MathUtils.seededRandom(i3 * params.galaxySeed) *
                params.radius;
            const branchAngle =
                ((i % params.branches) / params.branches) * Math.PI * 2;

            /*
            // x
            positions[i3] =
                (THREE.MathUtils.seededRandom(i3 * params.galaxySeed) - 0.5) *
                10;
            // y
            positions[i3 + 1] =
                (THREE.MathUtils.seededRandom((i3 + 1) * params.galaxySeed) -
                    0.5) *
                10;
            // z
            positions[i3 + 2] =
                (THREE.MathUtils.seededRandom((i3 + 2) * params.galaxySeed) -
                    0.5) *
                10;

             */
            // x
            positions[i3] = Math.cos(branchAngle) * radius;
            // y
            positions[i3 + 1] = 0;
            // z
            positions[i3 + 2] = Math.sin(branchAngle) * radius;
        }
    };
    createGalaxy();

    $: bufferGeometry?.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );
</script>

<T.PerspectiveCamera
    makeDefault
    position={[3, 3, 3]}
    fov={75}
    near={0.1}
    far={100}
>
    <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.Points rotation.y={rotation} position.y={1}>
    <T.BufferGeometry bind:ref={bufferGeometry} />

    {#await useTexture(starImage) then texture}
        <T.PointsMaterial
            size={params.starSize}
            sizeAttenuation={true}
            transparent={true}
            alphaMap={texture}
            depthWrite={false}
        />
    {/await}
</T.Points>

<T.DirectionalLight position={[3, 10, 7]} />
