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

    export let globalProperties;

    const { scene, renderer, camera } = useThrelte();
    const composer = new EffectComposer(renderer, { stencilBuffer: true });

    const setupEffectComposer = (camera) => {
        composer.removeAllPasses();
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(
            new EffectPass(
                camera,
                new BloomEffect({
                    intensity: globalProperties.bloom.intensity,
                    luminanceThreshold:
                        globalProperties.bloom.luminanceThreshold,
                    luminanceSmoothing:
                        globalProperties.bloom.luminanceSmoothing,
                    mipmapBlur: globalProperties.bloom.mipmapBlur,
                })
            )
        );
        composer.addPass(
            new EffectPass(
                camera,
                new GlitchEffect({
                    duration: new Vector2(0.1, 0.1),
                    delay: new Vector2(10, 30),
                })
            )
        );
    };
    // We need to set up the passes according to the camera in use
    $: setupEffectComposer($camera);
    useRender((_, delta) => {
        composer.render(delta);
    });
</script>
