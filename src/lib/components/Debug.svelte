<script>
    import { Grid, HTML } from '@threlte/extras';
    import { T, useFrame, useThrelte } from '@threlte/core';
    import * as THREE from 'three';

    let grid;
    let cursorPos;

    const { camera } = useThrelte();

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {
        pointer.set(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );

        raycaster.setFromCamera(pointer, camera.current);

        const intersects = raycaster.intersectObject(grid, false);

        if (intersects.length > 0) {
            const intersect = intersects[0];
            cursorPos = intersect.point;
        }
    }

    document.addEventListener('mousemove', onPointerMove);
</script>

{#if cursorPos}
    <HTML center portal={document.body}>
        <span
            >x:{cursorPos.x.toFixed(3)}, y:{cursorPos.y.toFixed(5)}, z:0.00000</span
        >
    </HTML>
{/if}

<Grid
    bind:ref={grid}
    sectionColor="rgba(255,255,255,0.1)"
    sectionSize={1}
    infiniteGrid={true}
    gridSize={[100, 100]}
    position={[0, 0, 0]}
/>

<style>
    span {
        display: block;
        position: absolute;
        top: 50px;
        right: 50px;
        width: 100%;
    }
</style>
