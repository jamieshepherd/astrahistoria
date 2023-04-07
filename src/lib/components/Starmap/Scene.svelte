<script>
    import starImage from '$lib/assets/textures/star.png';
    import { T, useThrelte } from '@threlte/core';
    import {
        Environment,
        interactivity,
        useTexture,
        Text,
    } from '@threlte/extras';
    import * as THREE from 'three';
    import Segmentum from '$lib/components/Starmap/Segmentum.svelte';
    import Storms from '$lib/components/Starmap/Storms.svelte';
    import POI from '$lib/components/Starmap/POI.svelte';
    import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
    import MapControls from '$lib/components/Starmap/MapControls.svelte';
    import { createGalaxy } from '$lib/utils/GalaxyUtils.js';
    interactivity();

    export let selectedLocation, globalProperties;

    const galaxyParams = globalProperties.galaxy;
    const camParams = globalProperties.camera;

    const { scene } = useThrelte();
    scene.backgroundIntensity = 0.3;

    let bufferGeometry;
    let positions = new Float32Array(galaxyParams.starCount * 3);
    let colors = new Float32Array(galaxyParams.starCount * 3);

    createGalaxy(positions, colors, galaxyParams);

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
        camParams.position.x,
        camParams.position.y,
        camParams.position.z,
    ]}
    rotation={[
        camParams.rotation.x,
        camParams.rotation.y,
        camParams.rotation.z,
    ]}
    fov={75}
    near={0.1}
    far={1000}
    frustumCulled={false}
>
    <MapControls />
    <!--    <T is={TrackballControls} camera={camera?.current} />-->
    <!--    
    <OrbitControls
        bind:ref={orbitControls}
        enableRotate={false}
        enablePan={true}
        enableDamping
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
        screenSpacePanning={false}
    />
    -->
</T.PerspectiveCamera>

<!--Save some png space here since we don't see all the sides-->
<Environment
    path="/env/"
    files={[
        'skybox_right1.jpg',
        'skybox_left2.jpg',
        'skybox_left2.jpg',
        'skybox_bottom4.jpg',
        'skybox_bottom4.jpg',
        'skybox_bottom4.jpg',
    ]}
    isBackground={true}
/>

<T.Group>
    <T.Points frustumCulled={false} position.x={0.5}>
        <T.BufferGeometry name="starBufferGeo" bind:ref={bufferGeometry} />

        {#await useTexture(starImage) then texture}
            <T.PointsMaterial
                size={galaxyParams.starSize}
                sizeAttenuation={true}
                map={texture}
                depthWrite={false}
                transparent={true}
                blending={THREE.AdditiveBlending}
                vertexColors={true}
            />
        {/await}
    </T.Points>

    <!--
    <T.Mesh position.y={0} position.x={-0.5} position.z={0.5}>
        <T.ConeGeometry args={[0.03, 0.1, 3]} />
        <T.MeshBasicMaterial color="pink" />
    </T.Mesh>
    -->

    <T.Group position.x={-0.2} position.y={0} rotation={[-1.5, 0.0, 0.0]}>
        <Segmentum />
    </T.Group>

    <T.Group rotation={[-1.5, 0.0, 0.0]}>
        <Storms />
    </T.Group>

    <T.Group rotation={[-1.5, 0.0, 0.0]} position.x={-0.9} position.z={-0.1}>
        {#if selectedLocation}
            <POI {selectedLocation} />
        {/if}
    </T.Group>
</T.Group>
