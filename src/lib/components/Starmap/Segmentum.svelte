<script>
    import segmentum from '$lib/assets/images/segmentum.png';
    import { useTexture } from '@threlte/extras';
    import { T } from '@threlte/core';
    import * as THREE from 'three';
</script>

{#await useTexture(segmentum) then texture}
    <T.Mesh scale={3.5}>
        <T.PlaneGeometry args={[1, 1]} />
        <T.MeshBasicMaterial
            map={texture}
            transparent={true}
            opacity={1}
            depthWrite={false}
            color="cyan"
        />
    </T.Mesh>
{/await}
