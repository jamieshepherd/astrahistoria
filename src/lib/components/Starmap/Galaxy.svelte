<script>
    import { T } from '@threlte/core';
    import { useTexture } from '@threlte/extras';
    import starImage from '$lib/assets/textures/star.png';
    import * as THREE from 'three';
    import Segmentum from '$lib/components/Starmap/Segmentum.svelte';
    import Storms from '$lib/components/Starmap/Storms.svelte';
    import POI from '$lib/components/Starmap/POI.svelte';
    import { createGalaxy } from '$lib/utils/GalaxyUtils.js';

    export let selectedLocation, galaxyParams;

    let bufferGeometry;
    let positions = new Float32Array(galaxyParams.starCount * 3);
    let colors = new Float32Array(galaxyParams.starCount * 3);

    createGalaxy(positions, colors, galaxyParams);

    $: bufferGeometry?.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );

    $: bufferGeometry?.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3)
    );
</script>

<T.Group>
    <T.Points frustumCulled={false} position.x={0.5}>
        <T.BufferGeometry name="starBufferGeo" bind:ref={bufferGeometry} />

        {#await useTexture(starImage) then texture}
            <T.PointsMaterial
                size={galaxyParams.starSize}
                sizeAttenuation={true}
                map={texture}
                depthWrite={false}
                transparent={true}
                blending={THREE.AdditiveBlending}
                vertexColors={true}
            />
        {/await}
    </T.Points>

    <!--
  <T.Mesh position.y={0} position.x={-0.5} position.z={0.5}>
      <T.ConeGeometry args={[0.03, 0.1, 3]} />
      <T.MeshBasicMaterial color="pink" />
  </T.Mesh>
  -->

    <T.Group position.x={-0.2} position.y={0}>
        <Segmentum />
    </T.Group>

    <T.Group>
        <Storms />
    </T.Group>

    <T.Group rotation={[-1.5, 0.0, 0.0]} position.x={-0.9} position.z={-0.1}>
        {#if selectedLocation}
            <POI {selectedLocation} />
        {/if}
    </T.Group>
</T.Group>
