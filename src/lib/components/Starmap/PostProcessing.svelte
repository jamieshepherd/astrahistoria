<script>
    import { useRender, useThrelte } from '@threlte/core';
    import {
        EffectComposer,
        EffectPass,
        RenderPass,
        MaskPass,
        BloomEffect,
        BlendFunction,
        GlitchEffect,
    } from 'postprocessing';
    import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
    import { Vector2 } from 'three';
    import { setupEffectComposer } from '$lib/utils/PostProcessingUtils.js';

    export let globalProperties;

    const { scene, renderer, camera } = useThrelte();
    let composer;

    window.addEventListener(
        'resize',
        () => {
            composer = setupEffectComposer(
                renderer,
                scene,
                $camera,
                globalProperties.bloom
            );
        },
        false
    );

    // We need to set up the passes according to the camera in use
    $: composer = setupEffectComposer(
        renderer,
        scene,
        $camera,
        globalProperties.bloom
    );
    useRender((_, delta) => {
        composer?.render(delta);
    });
</script>
