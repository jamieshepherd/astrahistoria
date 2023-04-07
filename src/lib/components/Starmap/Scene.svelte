<script>
    import { T, useThrelte } from '@threlte/core';
    import { Environment, interactivity } from '@threlte/extras';
    import MapControls from '$lib/components/Starmap/MapControls.svelte';
    import Galaxy from '$lib/components/Starmap/Galaxy.svelte';
    interactivity();

    export let selectedLocation, globalProperties;

    const { scene } = useThrelte();
    scene.backgroundIntensity = 0.3;
</script>

<T.PerspectiveCamera
    makeDefault
    position.x={globalProperties.camera.position.x}
    position.y={globalProperties.camera.position.y}
    position.z={globalProperties.camera.position.z}
    rotation.x={globalProperties.camera.rotation.x}
    rotation.y={globalProperties.camera.rotation.y}
    rotation.z={globalProperties.camera.rotation.z}
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

<Galaxy galaxyParams={globalProperties.galaxy} {selectedLocation} />
