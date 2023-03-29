<script>
    import segmentum from '$lib/assets/images/segmentum.png';
    import { Text, useTexture } from '@threlte/extras';
    import font from '$lib/assets/fonts/MajorMonoDisplay-Regular.ttf';
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

<T.Group position.z={0.1}>
    <Text
        text="segmentum 
solar"
        {font}
        fontSize={0.05}
        outlineBlur={0.2}
        textAlign="center"
        position={[-0.8, 0]}
    />
    <Text
        text="segmentum 
pacifius"
        {font}
        fontSize={0.05}
        outlineBlur={0.2}
        textAlign="center"
        position={[-1.48, 0.1]}
    />
    <Text
        text="ultima 
segmentum"
        {font}
        fontSize={0.05}
        outlineBlur={0.2}
        textAlign="center"
        position={[0.4, -0.3]}
    />
    <Text
        text="segmentum 
tempestus"
        {font}
        fontSize={0.05}
        outlineBlur={0.2}
        textAlign="center"
        position={[-0.8, -0.8]}
    />

    <Text
        text="segmentum 
obscurus"
        {font}
        fontSize={0.05}
        outlineBlur={0.2}
        textAlign="center"
        position={[-0.9, 1]}
    />
</T.Group>
