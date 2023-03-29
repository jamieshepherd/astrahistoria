<script>
    import { useRender, useThrelte } from '@threlte/core';
    import {
        EffectComposer,
        EffectPass,
        RenderPass,
        MaskPass,
        BloomEffect,
        BlendFunction,
    } from 'postprocessing';
    const { scene, renderer, camera } = useThrelte();

    const composer = new EffectComposer(renderer, { stencilBuffer: true });

    const setupEffectComposer = (camera) => {
        composer.removeAllPasses();
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(
            new EffectPass(
                camera,
                new BloomEffect({
                    intensity: 1,
                    luminanceThreshold: 0,
                    luminanceSmoothing: 0.1,
                    mipmapBlur: true,
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
