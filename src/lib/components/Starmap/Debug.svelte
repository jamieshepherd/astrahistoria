<script>
    import { T, useFrame } from '@threlte/core';
    import { Pane } from 'tweakpane';
    import Stats from 'stats.js';

    export let globalProperties;

    const stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);

    useFrame(() => {
        stats.begin();
        stats.end();
    });

    const pane = new Pane();
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
        expanded: false,
    });
    galaxyFolder.addInput({ seed: globalProperties.galaxy.seed }, 'seed');
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

    pane.on('change', (ev) => {
        const path = ev.presetKey.split('.');

        globalProperties[path[0]][path[1]] = ev.value;
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
