<script>
    import starImage from '$lib/assets/textures/star.png';
    import { T, useFrame, useThrelte } from '@threlte/core';
    import {
        OrbitControls,
        Environment,
        interactivity,
        layers,
        useTexture,
    } from '@threlte/extras';
    import * as THREE from 'three';
    import Segmentum from '$lib/components/Starmap/Segmentum.svelte';

    interactivity();
    layers();

    export let cursorPosition = { x: 0, y: 0 };
    const { scene } = useThrelte();
    scene.backgroundIntensity = 0.3;

    let camBase = {
        position: {
            x: -0.3,
            y: 2.5,
            z: 0.2,
        },
        rotation: {
            x: -1.5,
            y: 0,
            z: 0,
        },
    };

    let camPos = {
        x: camBase.position.x,
        y: camBase.position.y,
        z: camBase.position.z,
    };

    let camRot = {
        x: camBase.rotation.x,
        y: camBase.rotation.y,
        z: camBase.rotation.z,
    };
    const params = {
        x: 0.2,
        y: -0.2,
        z: -0.2,
        galaxySeed: 1337,
        starCount: 30000,
        starSize: 0.012,
        radius: 3,
        branches: 5,
        spin: 2,
        starPower: 4,
        innerColor: '#ff6600',
        outerColor: '#ffffff',
        maxPolarAngle: 5,
    };

    const lerpedPosition = new THREE.Vector3();

    useFrame(({ camera }, delta) => {
        const cursor = new THREE.Vector3(
            cursorPosition.x / window.innerWidth - 0.5,
            cursorPosition.y / window.innerHeight - 0.5
        );
        lerpedPosition.lerp(cursor, delta);
        camPos.x = camBase.position.x + Math.min(lerpedPosition.x * 0.2, 2);
        camPos.z = camBase.position.z + Math.min(lerpedPosition.y * 0.2, 2);
        camRot.x = camBase.rotation.x + Math.min(lerpedPosition.x * 0.2, 2);
        camRot.y = camBase.rotation.y + Math.min(lerpedPosition.y * 0.2, 2);
    });

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
    position={[camPos.x, camPos.y, camPos.z]}
    rotation={[camRot.x, camRot.y, camRot.z]}
    fov={75}
    near={0.1}
    far={1000}
    layers={'all'}
    frustumCulled={false}
>
    <!--    <OrbitControls-->
    <!--        enablePan={false}-->
    <!--        enableDamping-->
    <!--        maxPolarAngle={params.maxPolarAngle}-->
    <!--        minDistance={2}-->
    <!--        maxDistance={3}-->
    <!--    />-->
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

    <T.Mesh layers={2} position.y={0} position.x={-0.5} position.z={0.5}>
        <T.ConeGeometry args={[0.03, 0.1, 3]} />
        <T.MeshBasicMaterial color="pink" />
    </T.Mesh>

    <T.Group
        layers={3}
        position.x={-0.2}
        position.y={0}
        rotation={[-1.5, 0.0, 0.0]}
    >
        <Segmentum />
    </T.Group>
</T.Group>
