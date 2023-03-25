<script>
    import { onMount } from 'svelte';
    import { createScene } from '$lib/utils/ThreeScene.js';
    let el;

    onMount(() => {
        createScene(el);
    });
</script>

<canvas bind:this={el} />

<style lang="scss">
    canvas {
        background: transparent;
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
