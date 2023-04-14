<script>
    import { T } from '@threlte/core';
    import * as THREE from 'three';

    export let start, end, color;
    let geometry;
    let positions = new Float32Array([...start, ...end]);

    $: geometry?.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );
</script>

<T.Line>
    <T.LineBasicMaterial {color} />
    <T.BufferGeometry bind:ref={geometry} />
</T.Line>
