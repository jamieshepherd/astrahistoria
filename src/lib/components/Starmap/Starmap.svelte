<script>
    import { Canvas } from '@threlte/core';
    import Scene from '$lib/components/Starmap/Scene.svelte';
    import PostProcessing from '$lib/components/Starmap/PostProcessing.svelte';
    import Debug from '$lib/components/Starmap/Debug.svelte';
    import defaultProperties from '$lib/assets/data/default.json';

    export let selectedLocations, debugOpen;

    let globalProperties = { ...defaultProperties };
</script>

<div class="starmap">
    <Canvas>
        <Scene bind:globalProperties {selectedLocations} />
        <PostProcessing bind:globalProperties />
        <Debug bind:globalProperties {debugOpen} />
    </Canvas>
</div>

<style lang="scss">
    .starmap {
        background: url('$lib/assets/images/bg.jpg');
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: introFade 2s;

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
            z-index: 101;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }
    }

    @keyframes introFade {
        0% {
            opacity: 0;
            transform: scale(1.1);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
