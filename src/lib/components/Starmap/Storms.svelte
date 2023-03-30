<script>
    import { T, useFrame } from '@threlte/core';
    import { HTML, useTexture } from '@threlte/extras';
    import cloud from '$lib/assets/textures/smoke.png';
    import * as THREE from 'three';

    let rotationSpeed = 0.2;
    const stormColor = new THREE.Color('#420e40');
    const lightningColor = new THREE.Color('#552653');
    const stormPositions = [
        { x: -0.3, y: 0.8 },
        { x: -0.5, y: 0.9 },
        { x: -0.7, y: 0.9 },
        { x: -1, y: 1 },
        { x: -0.9, y: 1.1 },
        { x: -0.9, y: 1.2 },
        { x: -1.2, y: 0.9 },
        { x: -1.4, y: 0.8 },
        { x: -2, y: 0.8 },
        { x: -2.2, y: 1 },
        { x: -0, y: 0.6 },
        { x: 0.1, y: 0.5 },
        { x: 0.2, y: 0.4 },
        { x: 0.4, y: 0.4 },
        { x: 0.6, y: 0.2 },
        { x: 0.8, y: 0 },
        { x: 0.6, y: -0 },
        { x: 0.8, y: -0 },
        { x: 0.8, y: -0 },
        { x: 0.4, y: -0.2 },
        { x: 0.6, y: -0.2 },
        { x: 0.8, y: -0.2 },
        { x: 1, y: -0.2 },
        { x: 0.6, y: -0.4 },
        { x: 0.8, y: -0.4 },
        { x: 1, y: -0.6 },
        { x: 1.2, y: -0.6 },
        { x: 1.4, y: -0.6 },
        { x: 1.6, y: -0.6 },
        { x: 1.8, y: -0.7 },
        { x: 1.9, y: -0.7 },
        { x: 2, y: -0.8 },
        { x: 2.2, y: -0.8 },
        { x: 2.3, y: -0.8 },
        { x: 2.4, y: -0.9 },
        { x: 2.5, y: -1.2 },
        { x: 2.4, y: -1.4 },
        { x: 2.3, y: -1.6 },
    ];
    let rotations = stormPositions.map((p) => Math.random() * 360);
    let lights = stormPositions.map(() => 0);

    useFrame(({}, delta) => {
        rotations = rotations.map((r) =>
            Math.min(r + delta * rotationSpeed, 360)
        );
        lights = lights.map((l) => {
            if (l !== 0) {
                return Math.max(l - delta * 5, 0);
            } else {
                return Math.random() > 0.999 ? 1 : 0;
            }
        });
    });
</script>

<T.AmbientLight args={[0xffffff, 2.5]} />
{#await useTexture(cloud) then texture}
    {#each stormPositions as storm, i}
        <T.Mesh position={[storm.x, storm.y, 0]} rotation.z={rotations[i]}>
            <T.PlaneBufferGeometry name="stormBufferGeo" args={[0.5, 0.5]} />
            <T.MeshLambertMaterial
                color={lights[i] === 0
                    ? stormColor
                    : new THREE.Color().lerpColors(
                          stormColor,
                          lightningColor,
                          lights[i]
                      )}
                map={texture}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
            <!--            
            <T.PointLight
                distance={1}
                position.z={0.5}
                intensity={2}
                power={lights[i]}
            />
            -->
        </T.Mesh>
    {/each}
{/await}
