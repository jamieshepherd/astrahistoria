<script>
    import { T } from '@threlte/core';
    import { useTexture } from '@threlte/extras';
    import cloud from '$lib/assets/textures/smoke.png';
    import * as THREE from 'three';

    let bufferGeometry;
    const stormPositions = [
        { x: 0, y: 0 },
        { x: 0.2, y: 0.2 },
        { x: 0.4, y: 0.4 },
    ];

    let positions = new Float32Array(stormPositions.length * 3);
    for (let i = 0; i < stormPositions.length; i++) {
        positions[i * 3] = stormPositions[i].x;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = stormPositions[i].y;
    }

    $: bufferGeometry?.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );
</script>

<T.Points>
    <T.BufferGeometry name="stormBufferGeo" bind:ref={bufferGeometry} />

    {#await useTexture(cloud) then texture}
        <T.PointsMaterial
            size={0.2}
            color="#61709d"
            sizeAttenuation={true}
            map={texture}
            transparent={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
        />
    {/await}
</T.Points>
