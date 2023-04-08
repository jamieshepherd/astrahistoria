<script>
    import { T, useFrame } from '@threlte/core';
    import { Pane } from 'tweakpane';
    import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
    import { BlendFunction } from 'postprocessing';
    import { afterUpdate, beforeUpdate } from 'svelte';

    export let globalProperties;

    let pane;
    let fpsGraph;

    function createPane() {
        pane = new Pane();
        pane.registerPlugin(EssentialsPlugin);

        fpsGraph = pane.addBlade({
            view: 'fpsgraph',
            label: 'fpsgraph',
            lineCount: 2,
        });
        const cameraFolder = pane.addFolder({
            title: 'Camera',
            expanded: true,
        });
        cameraFolder.addInput(
            { position: globalProperties.camera.position },
            'position',
            { presetKey: 'camera.position' }
        );
        cameraFolder.addInput(
            { rotation: globalProperties.camera.rotation },
            'rotation',
            { presetKey: 'camera.rotation', min: 0, max: 3.14, step: 0.01 }
        );
        const galaxyFolder = pane.addFolder({
            title: 'Galaxy',
            expanded: true,
        });
        galaxyFolder.addInput({ seed: globalProperties.galaxy.seed }, 'seed', {
            presetKey: 'galaxy.seed',
        });
        galaxyFolder.addInput(
            { starCount: globalProperties.galaxy.starCount },
            'starCount',
            { presetKey: 'galaxy.starCount' }
        );
        galaxyFolder.addInput(
            { starSize: globalProperties.galaxy.starSize },
            'starSize',
            { presetKey: 'galaxy.starSize' }
        );
        galaxyFolder.addInput(
            { radius: globalProperties.galaxy.radius },
            'radius',
            { presetKey: 'galaxy.radius' }
        );
        galaxyFolder.addInput(
            { branches: globalProperties.galaxy.branches },
            'branches',
            { presetKey: 'galaxy.branches' }
        );
        galaxyFolder.addInput({ spin: globalProperties.galaxy.spin }, 'spin', {
            presetKey: 'galaxy.spin',
        });
        galaxyFolder.addInput(
            { starPower: globalProperties.galaxy.starPower },
            'starPower',
            { presetKey: 'galaxy.starPower' }
        );
        galaxyFolder.addInput(
            { innerColor: globalProperties.galaxy.innerColor },
            'innerColor',
            { presetKey: 'galaxy.innerColor' }
        );
        galaxyFolder.addInput(
            { outerColor: globalProperties.galaxy.outerColor },
            'outerColor',
            { presetKey: 'galaxy.outerColor' }
        );

        const stormFolder = pane.addFolder({
            title: 'Storm',
            expanded: false,
        });
        stormFolder.addInput({ scale: globalProperties.storm.scale }, 'scale', {
            presetKey: 'storm.scale',
            min: 0,
            max: 5,
        });
        stormFolder.addInput(
            { blending: globalProperties.storm.blending },
            'blending',
            { presetKey: 'storm.blending', min: 0, max: 5, step: 1 }
        );
        stormFolder.addInput(
            { stormColor: globalProperties.storm.stormColor },
            'stormColor',
            { presetKey: 'storm.stormColor' }
        );
        stormFolder.addInput(
            { lightningColor: globalProperties.storm.lightningColor },
            'lightningColor',
            { presetKey: 'storm.lightningColor' }
        );

        const bloomFolder = pane.addFolder({
            title: 'Bloom',
            expanded: false,
        });
        bloomFolder.addInput(
            { intensity: globalProperties.bloom.intensity },
            'intensity',
            { presetKey: 'bloom.intensity' }
        );
        bloomFolder.addInput(
            { luminanceThreshold: globalProperties.bloom.luminanceThreshold },
            'luminanceThreshold',
            { presetKey: 'bloom.luminanceThreshold' }
        );
        bloomFolder.addInput(
            { luminanceSmoothing: globalProperties.bloom.luminanceSmoothing },
            'luminanceSmoothing',
            { presetKey: 'bloom.luminanceSmoothing' }
        );
        bloomFolder.addInput(
            { mipmapBlur: globalProperties.bloom.mipmapBlur },
            'mipmapBlur',
            { presetKey: 'bloom.mipmapBlur' }
        );

        bloomFolder.addInput(
            { levels: globalProperties.bloom.levels },
            'levels',
            {
                presetKey: 'bloom.levels',
            }
        );

        bloomFolder.addInput(
            { radius: globalProperties.bloom.radius },
            'radius',
            {
                presetKey: 'bloom.radius',
            }
        );

        bloomFolder.addInput(
            { blendFunction: globalProperties.bloom.blendFunction },
            'blendFunction',
            { presetKey: 'bloom.blendFunction', options: BlendFunction }
        );

        pane.on('change', (ev) => {
            const path = ev.presetKey.split('.');

            globalProperties[path[0]][path[1]] = ev.value;
        });
    }

    useFrame(() => {
        fpsGraph?.begin();
        fpsGraph?.end();
    });

    beforeUpdate(() => {
        createPane();
    });
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
