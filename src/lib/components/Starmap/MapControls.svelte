<script>
    import { MapControls } from 'three/addons/controls/OrbitControls.js';
    import { T, useParent, useThrelte } from '@threlte/core';
    import * as THREE from 'three';
    import { Camera } from 'three';

    const { camera, renderer } = useThrelte();

    const parent = useParent();
    if (!($parent instanceof Camera)) {
        throw new Error(
            'Parent missing: <MapControls> need to be a child of a <Camera>'
        );
    }
</script>

<T
    is={MapControls}
    args={[$parent, renderer.domElement]}
    screenSpacePanning={true}
    enableRotate={false}
    mouseButtons={{
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.PAN,
        RIGHT: THREE.MOUSE.PAN,
    }}
    touchs={{
        ONE: THREE.MOUSE.PAN,
        TWO: THREE.MOUSE.PAN,
    }}
    minDistance={1}
    maxDistance={5}
/>
