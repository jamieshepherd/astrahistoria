<script>
    import { T, useFrame } from '@threlte/core';
    import { HTML, useTexture } from '@threlte/extras';
    import cloud from '$lib/assets/textures/smoke.png';
    import * as THREE from 'three';

    let rotationSpeed = 0.1;
    const stormPositions = [
        { x: 0, y: 0 },
        { x: 0.2, y: 0.2 },
        { x: 0.4, y: 0.4 },
        { x: 0.6, y: 0.6 },
        { x: 0.8, y: 0.8 },
        { x: 1, y: 1 },
    ];
    let rotations = stormPositions.map((p) => Math.random() * 360);
    let lights = stormPositions.map((p) => p.x);

    useFrame(({}, delta) => {
        rotations = rotations.map((r) =>
            Math.min(r + delta * rotationSpeed, 360)
        );
        lights = lights.map((l, i) => (Math.random() > 0.995 ? 70 : 0.1));
    });
</script>

<T.AmbientLight args={[0xffffff, 2.5]} />
{#await useTexture(cloud) then texture}
    {#each stormPositions as storm, i}
        <T.Mesh position={[storm.x, storm.y, 0]} rotation.z={rotations[i]}>
            <T.PlaneBufferGeometry name="stormBufferGeo" args={[0.5, 0.5]} />
            <T.MeshLambertMaterial
                color="#420e40"
                map={texture}
                transparent={true}
                depthWrite={false}
            />
            <T.PointLight
                distance={1}
                position.z={0.5}
                intensity={2}
                power={lights[i]}
            />
        </T.Mesh>
    {/each}
{/await}
