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

    const camParams = {
        x: 2,
        y: 2,
        z: 2,
    };

    const params = {
        galaxySeed: 1337,
        starCount: 50000,
        starSize: 0.02,
        radius: 4,
        branches: 5,
        spin: 5,
        starSpread: 0.5,
        starPower: 3,
        innerColor: '#ff6600',
        outerColor: '#1b3984',
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
    position={[camParams.x, camParams.y, camParams.z]}
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
            blending={THREE.AdditiveBlending}
            vertexColors={true}
        />
    {/await}
</T.Points>

<T.DirectionalLight position={[3, 10, 7]} />
