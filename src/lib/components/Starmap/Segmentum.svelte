<script>
    import segmentum from '$lib/assets/images/segmentum.png';
    import { HTML, Text, useTexture } from '@threlte/extras';
    import svg from '$lib/assets/images/segmentum.svg';
    import png from '$lib/assets/images/segmentum.png';
    import { T } from '@threlte/core';
    import Line from '$lib/components/Line.svelte';

    const params = {
        fontSize: 0.04,
    };
</script>

{#await useTexture(segmentum) then texture}
    <T.Mesh scale={5}>
        <T.PlaneGeometry args={[1, 1]} />
        <T.MeshBasicMaterial
            map={texture}
            transparent={true}
            opacity={1}
            depthWrite={false}
            color="#00f6ff"
        />
    </T.Mesh>
{/await}

<T.Group position.z={0}>
    <HTML
        transform
        scale={0.1}
        position={[-0.65, -0.2]}
        pointerEvents="none"
        zIndexRange={[100, 0]}
    >
        <span class="segmentum-label"
            ><span>segmentum</span><span>solar</span>
        </span></HTML
    >

    <HTML
        transform
        scale={0.1}
        position={[-1.34, 0.1]}
        pointerEvents="none"
        zIndexRange={[100, 0]}
    >
        <span class="segmentum-label"
            ><span>segmentum</span><span>pacificus</span>
        </span></HTML
    >

    <HTML
        transform
        scale={0.1}
        position={[0.4, -0.3]}
        pointerEvents="none"
        zIndexRange={[100, 0]}
    >
        <span class="segmentum-label"
            ><span>ultima</span><span>segmentum</span>
        </span></HTML
    >

    <HTML
        transform
        scale={0.1}
        position={[-0.8, -0.8]}
        pointerEvents="none"
        zIndexRange={[100, 0]}
    >
        <span class="segmentum-label"
            ><span>segmentum</span><span>tempestus</span>
        </span></HTML
    >

    <HTML
        transform
        scale={0.1}
        position={[-0.9, 1]}
        pointerEvents="none"
        zIndexRange={[100, 0]}
    >
        <span class="segmentum-label"
            ><span>segmentum</span><span>obscurus</span>
        </span></HTML
    >
</T.Group>

<style lang="scss">
    .segmentum-label {
        color: #333333;
        font-weight: 600;
        font-size: 1.4rem;
        text-align: center;
        line-height: 1rem;
        pointer-events: none;
        user-select: none;
        z-index: -10;

        span {
            background: rgba(0, 246, 255, 1);
            padding: 6px 8px;
            display: block;
            width: fit-content;
            margin: 0 auto;
        }
    }
</style>
