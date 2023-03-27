<script>
    import { T, useFrame } from '@threlte/core';
    import { interactivity } from '@threlte/extras';
    import { spring } from 'svelte/motion';

    interactivity();
    const scale = spring(1);
    let rotation = 0;
    useFrame((state, delta) => {
        rotation += delta / 8;
    });
</script>

<T.PerspectiveCamera
    makeDefault
    position={[3, 3, 3]}
    on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
    }}
/>

<T.Points rotation.y={rotation} position.y={1} scale={$scale}>
    <T.SphereBufferGeometry args={[1, 32, 32]} />
    <T.PointsMaterial size={0.02} sizeAttenuation={true} />
</T.Points>

<T.DirectionalLight position={[3, 10, 7]} />
