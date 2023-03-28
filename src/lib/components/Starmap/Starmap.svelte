<script>
    import { Canvas } from '@threlte/core';
    import Scene from '$lib/components/Starmap/Scene.svelte';
</script>

<div class="starmap">
    <Canvas>
        <Scene />
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
        bottom: 150px;
    }
</style>
