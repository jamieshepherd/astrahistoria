<script>
    import { T, useFrame } from '@threlte/core';
    import * as UIL from 'uil';

    export let globalProperties;

    let ui;
    let fpsGraph;

    function uiChange(v, id) {
        console.log(v, id);
    }

    function createPane() {
        if (ui) return;
        ui = new UIL.Gui({ w: 300 }).onChange(uiChange);

        ui.add('fps', { res: 70 }).open();

        const cameraGroup = ui.add('group', {
            name: 'Camera',
        });
        cameraGroup.add(globalProperties.camera, 'position').listen();
        cameraGroup.add(globalProperties.camera, 'rotation').listen();
        cameraGroup.open();

        const galaxyGroup = ui.add('group', {
            name: 'Galaxy',
        });
        galaxyGroup.add(globalProperties.galaxy, 'seed').listen();
        galaxyGroup.add(globalProperties.galaxy, 'starCount').listen();
        galaxyGroup.add(globalProperties.galaxy, 'starSize').listen();
        galaxyGroup.add(globalProperties.galaxy, 'radius').listen();
        galaxyGroup.add(globalProperties.galaxy, 'branches').listen();
        galaxyGroup.add(globalProperties.galaxy, 'spin').listen();
        galaxyGroup.add(globalProperties.galaxy, 'starPower').listen();
        galaxyGroup.add(globalProperties.galaxy, 'innerColor').listen();
        galaxyGroup.add(globalProperties.galaxy, 'outerColor').listen();

        const stormGroup = ui.add('group', {
            name: 'Storm',
        });
        stormGroup.add(globalProperties.storm, 'scale').listen();
        stormGroup.add(globalProperties.storm, 'blending').listen();
        stormGroup.add(globalProperties.storm, 'stormColor').listen();
        stormGroup.add(globalProperties.storm, 'lightningColor').listen();

        const bloomGroup = ui.add('group', {
            name: 'Bloom',
        });
        bloomGroup.add(globalProperties.bloom, 'intensity').listen();
        bloomGroup.add(globalProperties.bloom, 'luminanceThreshold').listen();
        bloomGroup.add(globalProperties.bloom, 'luminanceSmoothing').listen();
        bloomGroup.add(globalProperties.bloom, 'mipmapBlur').listen();
        bloomGroup.add(globalProperties.bloom, 'levels').listen();
        bloomGroup.add(globalProperties.bloom, 'radius').listen();
        bloomGroup.add(globalProperties.bloom, 'blendFunction').listen();
    }

    useFrame(() => {
        fpsGraph?.begin();
        fpsGraph?.end();
    });

    createPane();
</script>

<!--
<Grid
    bind:ref={grid}
    sectionColor="rgba(255,255,255,0.1)"
    sectionSize={1}
    infiniteGrid={true}
    gridSize={[100, 100]}
    position={[0, 0, 0]}
/>
-->

<style>
    span {
        display: block;
        position: absolute;
        top: 50px;
        right: 50px;
        width: 100%;
    }
</style>
