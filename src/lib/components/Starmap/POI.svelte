<script>
    import { HTML } from '@threlte/extras';
    import { Line2 } from 'three/addons/lines/Line2.js';
    import { T, useThrelte } from '@threlte/core';
    import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
    import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

    export let selectedLocation;
    let locationData;
    let lineGeometry;
    const { camera } = useThrelte();

    async function getData() {
        const response = await fetch(
            `/data/locations/${selectedLocation}.json`
        );

        locationData = await response.json();
    }

    getData();

    $: if (lineGeometry && locationData) {
        lineGeometry.setPositions([
            locationData.location[0] / 10,
            locationData.location[1] / 10,
            0,
            locationData.location[0] / 10,
            (locationData.location[1] + 1) / 10,
            0,
        ]);
    }

    $: if (locationData) {
        camera.current?.position.set(
            locationData.location[0] / 10,
            locationData.location[1] / 10,
            camera.current?.position.z
        );
    }
</script>

{#if locationData}
    <HTML
        transform
        scale={0.1}
        position={[
            locationData.location[0] / 10,
            (locationData.location[1] + 1) / 10,
            0,
        ]}
    >
        <div class="point-of-interest">
            <div class="poi-label">
                {locationData.name}
            </div>
        </div>
    </HTML>
    <T is={Line2}>
        <T is={LineGeometry} bind:ref={lineGeometry} />
        <T
            is={LineMaterial}
            linewidth={0.0015}
            color="red"
            sizeAttenuation={true}
        />
    </T>
{/if}

<style lang="scss">
    .point-of-interest {
        animation: zoom 0.5s;
    }
    .poi-label {
        color: #ffffff;
        font-weight: 700;
        font-size: 1.4rem;
        text-align: center;
        line-height: 1rem;
        pointer-events: none;
        user-select: none;
        z-index: -10;
        background: rgb(255, 0, 0);
        padding: 6px 8px 8px;
        display: block;
        width: fit-content;
        max-width: 200px;
        white-space: nowrap;
        margin: 0 auto;
        text-transform: lowercase;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @keyframes zoom {
        0% {
            opacity: 0;
            transform: scale(3);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
