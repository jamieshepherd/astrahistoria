<script>
    import starImage from '$lib/assets/textures/star.png';
    import { T, useThrelte } from '@threlte/core';
    import {
        OrbitControls,
        Environment,
        interactivity,
        layers,
        useTexture,
        Text,
    } from '@threlte/extras';
    import * as THREE from 'three';
    import Segmentum from '$lib/components/Starmap/Segmentum.svelte';

    interactivity();
    layers({ defaultLayers: 0 });

    const { scene } = useThrelte();
    scene.backgroundIntensity = 0.3;

    const params = {
        x: 0.2,
        y: -0.2,
        z: -0.2,
        galaxySeed: 1337,
        starCount: 20000,
        starSize: 0.012,
        radius: 3,
        branches: 5,
        spin: 2,
        starPower: 4,
        innerColor: '#ff6600',
        outerColor: '#ffffff',
        maxPolarAngle: 5,
        camera: {
            position: {
                x: 0,
                y: 2,
                z: 0,
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
    };

    let bufferGeometry;
    let positions = new Float32Array(params.starCount * 3);
    let colors = new Float32Array(params.starCount * 3);

    const innerColor = new THREE.Color(params.innerColor);
    const outerColor = new THREE.Color(params.outerColor);

    const createGalaxy = () => {
        for (let i = 0; i < params.starCount * 3; i++) {
            const i3 = i * 3;

            // Position
            const radius =
                THREE.MathUtils.seededRandom(i3 * params.galaxySeed) *
                params.radius;
            const spinAngle = radius * params.spin;
            const branchAngle =
                ((i % params.branches) / params.branches) * Math.PI * 2;

            const spread = {
                x:
                    Math.pow(
                        THREE.MathUtils.seededRandom(
                            i3 * params.galaxySeed + 1
                        ),
                        params.starPower
                    ) *
                    (THREE.MathUtils.seededRandom(i3 * params.galaxySeed) < 0.5
                        ? 1
                        : -1),
                y:
                    Math.pow(
                        THREE.MathUtils.seededRandom(
                            i3 * params.galaxySeed + 2
                        ),
                        params.starPower
                    ) *
                    (THREE.MathUtils.seededRandom(i3 * params.galaxySeed * 2) <
                    0.5
                        ? 1
                        : -1),
                z:
                    Math.pow(
                        THREE.MathUtils.seededRandom(
                            i3 * params.galaxySeed + 3
                        ),
                        params.starPower
                    ) *
                    (THREE.MathUtils.seededRandom(i3 * params.galaxySeed * 3) <
                    0.5
                        ? 1
                        : -1),
            };

            // x
            positions[i3] =
                Math.cos(branchAngle + spinAngle) * radius + spread.x;
            // y
            positions[i3 + 1] = spread.y;
            // z
            positions[i3 + 2] =
                Math.sin(branchAngle + spinAngle) * radius + spread.z;

            // Color
            const mixedColor = innerColor
                .clone()
                .lerp(outerColor, radius / params.radius);
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }
    };
    createGalaxy();

    $: bufferGeometry?.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );

    $: bufferGeometry?.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3)
    );
</script>

<T.PerspectiveCamera
    makeDefault
    position={[
        params.camera.position.x,
        params.camera.position.y,
        params.camera.position.z,
    ]}
    rotation={[
        params.camera.rotation.x,
        params.camera.rotation.y,
        params.camera.rotation.z,
    ]}
    fov={75}
    near={0.1}
    far={1000}
    layers={'all'}
    frustumCulled={false}
>
    <OrbitControls
        enablePan={true}
        enableDamping
        maxPolarAngle={params.maxPolarAngle}
        minDistance={1.2}
        maxDistance={2}
        mouseButtons={{
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.PAN,
        }}
        touchs={{
            ONE: THREE.MOUSE.PAN,
            TWO: THREE.MOUSE.PAN,
        }}
    />
</T.PerspectiveCamera>

<Environment
    path="/env/"
    files={[
        'skybox_right1.png',
        'skybox_left2.png',
        'skybox_top3.png',
        'skybox_bottom4.png',
        'skybox_front5.png',
        'skybox_back6.png',
    ]}
    isBackground={true}
/>

<T.Group position.y={params.x} position.x={params.y} position.z={params.z}>
    <T.Points layers={1} frustumCulled={false}>
        <T.BufferGeometry bind:ref={bufferGeometry} />

        {#await useTexture(starImage) then texture}
            <T.PointsMaterial
                size={params.starSize}
                sizeAttenuation={true}
                transparent={true}
                alphaMap={texture}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                vertexColors={true}
            />
        {/await}
    </T.Points>

    <T.Mesh position.y={0} position.x={-0.5} position.z={0.5}>
        <T.ConeGeometry args={[0.03, 0.1, 3]} />
        <T.MeshBasicMaterial color="pink" />
    </T.Mesh>

    <T.Group position.x={-0.2} position.y={0} rotation={[-1.5, 0.0, 0.0]}>
        <Segmentum />
    </T.Group>
</T.Group>
