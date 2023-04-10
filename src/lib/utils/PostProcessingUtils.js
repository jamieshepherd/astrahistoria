import {
    BlendFunction,
    BloomEffect,
    EffectComposer,
    EffectPass,
    GlitchEffect,
    RenderPass,
} from 'postprocessing';
import { Vector2 } from 'three';

export function setupEffectComposer(renderer, scene, camera, bloomParams) {
    const composer = new EffectComposer(renderer, { stencilBuffer: true });
    composer.removeAllPasses();
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(
        new EffectPass(
            camera,
            new BloomEffect({
                intensity: bloomParams.intensity,
                luminanceThreshold: bloomParams.luminanceThreshold,
                luminanceSmoothing: bloomParams.luminanceSmoothing,
                mipmapBlur: bloomParams.mipmapBlur,
                levels: bloomParams.levels,
                radius: bloomParams.radius,
                blendFunction: bloomParams.blendFunction,
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

    return composer;
}
