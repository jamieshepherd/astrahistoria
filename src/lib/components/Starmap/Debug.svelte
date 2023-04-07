<script>
    import { T, useFrame } from '@threlte/core';
    import { Pane } from 'tweakpane';
    import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

    export let globalProperties;

    const pane = new Pane();
    pane.registerPlugin(EssentialsPlugin);

    const fpsGraph = pane.addBlade({
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
        { presetKey: 'camera.rotation' }
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
    galaxyFolder.addInput({ radius: globalProperties.galaxy.radius }, 'radius');
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

    pane.on('change', (ev) => {
        const path = ev.presetKey.split('.');

        globalProperties[path[0]][path[1]] = ev.value;
    });

    useFrame(() => {
        fpsGraph.begin();
        fpsGraph.end();
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
