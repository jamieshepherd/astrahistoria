<script>
    import { T, useThrelte } from '@threlte/core';
    import { Environment, interactivity } from '@threlte/extras';
    import Galaxy from '$lib/components/Starmap/Galaxy.svelte';
    import { dragControls } from '$lib/utils/DragUtils.js';
    interactivity();

    export let selectedLocation, globalProperties;

    const { scene, camera, renderer } = useThrelte();

    function dragAction(deltaX, deltaY) {
        if (!camera.current) return;

        camera.current.translateX(
            deltaX * -1 * globalProperties.camera.panSpeed
        );
        camera.current.translateY(deltaY * globalProperties.camera.panSpeed);
    }

    function zoomAction(delta) {
        if (!camera.current) return;

        camera.current.translateZ(delta * globalProperties.camera.zoomAmount);
        if (camera.current.position.z > globalProperties.camera.maxZoom) {
            camera.current.position.z = globalProperties.camera.maxZoom;
        }

        if (camera.current.position.z < globalProperties.camera.minZoom) {
            camera.current.position.z = globalProperties.camera.minZoom;
        }
    }

    function dragEnd() {
        globalProperties.camera.position = camera.current?.position;
    }

    dragControls(renderer.domElement, dragAction, zoomAction, dragEnd);

    scene.backgroundIntensity = 0.3;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
</script>

<T.PerspectiveCamera
    makeDefault
    position.x={globalProperties.camera.position.x}
    position.y={globalProperties.camera.position.y}
    position.z={globalProperties.camera.position.z}
    rotation.x={globalProperties.camera.rotation.x}
    rotation.y={globalProperties.camera.rotation.y}
    rotation.z={globalProperties.camera.rotation.z}
    fov={50}
    near={0.1}
    far={10}
/>

<Galaxy
    galaxyParams={globalProperties.galaxy}
    stormParams={globalProperties.storm}
    {selectedLocation}
/>
