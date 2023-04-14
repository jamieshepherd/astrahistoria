<script>
    import { T, useThrelte } from '@threlte/core';
    import * as UIL from 'uil';
    import { HTML, interactivity, useInteractivity } from '@threlte/extras';
    interactivity();

    export let globalProperties, debugOpen;

    let ui;
    let mpos = { x: 0, y: 0, z: 0 };

    function createPane(debugOpen) {
        if (!debugOpen) return;
        if (ui) return;
        ui = new UIL.Gui({ w: 300 });

        const statsGroup = ui.add('group', {
            name: 'Stats',
            bg: '#333',
            open: true,
        });
        statsGroup.add('fps', { res: 70 });

        const cameraGroup = ui.add('group', {
            name: 'Camera',
            bg: '#930',
        });
        cameraGroup
            .add(globalProperties.camera, 'position')
            .listen()
            .onChange((v) => (globalProperties.camera.position = v));
        cameraGroup
            .add(globalProperties.camera, 'rotation')
            .listen()
            .onChange((v) => (globalProperties.camera.rotation = v));

        const galaxyGroup = ui.add('group', {
            name: 'Galaxy',
            bg: '#800',
        });
        galaxyGroup
            .add(globalProperties.galaxy, 'seed', { type: 'number', min: 0 })
            .listen()
            .onChange((v) => (globalProperties.galaxy.seed = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'starCount', {
                type: 'number',
            })
            .listen()
            .onChange((v) => (globalProperties.galaxy.starCount = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'starSize', {
                type: 'slide',
                min: 0.01,
                max: 0.1,
                step: 0.01,
            })
            .listen()
            .onChange((v) => (globalProperties.galaxy.starSize = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'radius', {
                type: 'number',
            })
            .listen()
            .onChange((v) => (globalProperties.galaxy.radius = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'branches', {
                type: 'number',
            })
            .listen()
            .onChange((v) => (globalProperties.galaxy.branches = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'spin', {
                type: 'number',
            })
            .listen();
        galaxyGroup
            .add(globalProperties.galaxy, 'starPower', {
                type: 'number',
            })
            .listen()
            .onChange((v) => (globalProperties.galaxy.starPower = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'innerColor')
            .listen()
            .onChange((v) => (globalProperties.galaxy.innerColor = v));
        galaxyGroup
            .add(globalProperties.galaxy, 'outerColor')
            .listen()
            .onChange((v) => (globalProperties.galaxy.outerColor = v));

        const stormGroup = ui.add('group', {
            name: 'Storm',
            bg: '#905',
        });
        stormGroup
            .add(globalProperties.storm, 'scale', {
                type: 'slide',
                min: 0,
                max: 5,
                step: 0.1,
            })
            .listen()
            .onChange((v) => (globalProperties.storm.scale = v));
        stormGroup
            .add(globalProperties.storm, 'blending', {
                type: 'slide',
                min: 0,
                max: 5,
                step: 1,
            })
            .listen()
            .onChange((v) => (globalProperties.storm.blending = v));
        stormGroup
            .add(globalProperties.storm, 'stormColor')
            .listen()
            .onChange(
                (v) => (globalProperties.storm.stormColor = `#${v.slice(2)}`)
            );
        stormGroup
            .add(globalProperties.storm, 'lightningColor')
            .listen()
            .onChange(
                (v) =>
                    (globalProperties.storm.lightningColor = `#${v.slice(2)}`)
            );

        const bloomGroup = ui.add('group', {
            name: 'Bloom',
            bg: '#950',
        });
        bloomGroup
            .add(globalProperties.bloom, 'intensity', {
                type: 'number',
                min: 0,
                max: 5,
            })
            .listen()
            .onChange((v) => (globalProperties.bloom.intensity = v));
        bloomGroup
            .add(globalProperties.bloom, 'luminanceThreshold', {
                type: 'number',
                min: 0,
                max: 1,
            })
            .listen()
            .onChange((v) => (globalProperties.bloom.luminanceThreshold = v));
        bloomGroup
            .add(globalProperties.bloom, 'luminanceSmoothing', {
                type: 'number',
                min: 0,
                max: 1,
            })
            .listen()
            .onChange((v) => (globalProperties.bloom.luminanceSmoothing = v));
        bloomGroup
            .add(globalProperties.bloom, 'mipmapBlur')
            .listen()
            .onChange((v) => (globalProperties.bloom.mipmapBlur = v));
        bloomGroup
            .add(globalProperties.bloom, 'levels', {
                type: 'number',
            })
            .listen()
            .onChange((v) => (globalProperties.bloom.levels = v));
        bloomGroup
            .add(globalProperties.bloom, 'radius', {
                type: 'slide',
                min: 0,
                max: 5,
            })
            .listen()
            .onChange((v) => (globalProperties.bloom.radius = v));
        bloomGroup
            .add(globalProperties.bloom, 'blendFunction', {
                type: 'slide',
                min: 0,
                max: 32,
                step: 1,
            })
            .listen()
            .onChange((v) => (globalProperties.bloom.blendFunction = v));
    }

    $: createPane(debugOpen);
    $: if (!debugOpen) {
        ui?.dispose();
        ui = null;
    }
</script>

{#if debugOpen}
    <T.Group>
        <T.Mesh
            on:pointermove={(e) =>
                (mpos = { x: (e.point.x + 2) * 10, y: (e.point.y + 0.3) * 10 })}
        >
            <T.PlaneGeometry args={[10, 10]} />
            <T.MeshBasicMaterial
                transparent={true}
                opacity={1}
                depthWrite={false}
                color="#00f6ff"
                visible={false}
            />
        </T.Mesh>
    </T.Group>

    <HTML
        as="aside"
        portal={document.body}
        pointerEvents="none"
        calculatePosition={() => [0, 0]}
    >
        <span>({mpos.x.toFixed(3)},{mpos.y.toFixed(3)})</span>
    </HTML>
{/if}

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
        position: fixed;
    }
</style>
