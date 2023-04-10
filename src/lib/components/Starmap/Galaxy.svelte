<script>
    import { T } from '@threlte/core';
    import { useTexture } from '@threlte/extras';
    import starImage from '$lib/assets/textures/star.png';
    import * as THREE from 'three';
    import Segmentum from '$lib/components/Starmap/Segmentum.svelte';
    import Storms from '$lib/components/Starmap/Storms.svelte';
    import POI from '$lib/components/Starmap/POI.svelte';
    import { createGalaxy } from '$lib/utils/GalaxyUtils.js';
    import { beforeUpdate } from 'svelte';

    export let selectedLocation, galaxyParams, stormParams;

    let bufferGeometry;

    beforeUpdate(() => {
        const updated = createGalaxy(galaxyParams);

        $: bufferGeometry?.setAttribute(
            'position',
            new THREE.BufferAttribute(updated.positions, 3)
        );
        $: bufferGeometry?.setAttribute(
            'color',
            new THREE.BufferAttribute(updated.colors, 3)
        );
    });
</script>

<T.Group>
    <T.Points position.x={0.5}>
        <T.BufferGeometry name="starBufferGeo" bind:ref={bufferGeometry} />

        {#await useTexture(starImage) then texture}
            <T.PointsMaterial
                size={galaxyParams.starSize}
                map={texture}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                vertexColors={true}
            />
        {/await}
    </T.Points>

    <T.Group position.x={-0.8} position.y={-0.2}>
        <Segmentum />
    </T.Group>

    <T.Group>
        <Storms {stormParams} />
    </T.Group>

    <T.Group position.x={-0.9} position.z={-0.1}>
        {#if selectedLocation}
            <POI {selectedLocation} />
        {/if}
    </T.Group>
</T.Group>
