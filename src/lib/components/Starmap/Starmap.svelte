<script>
    import { Canvas } from '@threlte/core';
    import Scene from '$lib/components/Starmap/Scene.svelte';
    import PostProcessing from '$lib/components/Starmap/PostProcessing.svelte';

    let cursorPosition;
</script>

<div
    class="starmap"
    on:mousemove={(e) => (cursorPosition = { x: e.clientX, y: e.clientY })}
>
    <Canvas>
        <Scene {cursorPosition} />
        <PostProcessing />
    </Canvas>
</div>

<style lang="scss">
    .starmap {
        background: transparent;
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &:after {
            content: '';
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 1)
            );
            position: fixed;
            z-index: 0;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }
    }
</style>
