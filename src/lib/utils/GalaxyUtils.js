import * as THREE from 'three';

export function createGalaxy(positions, colors, params) {
    const innerColor = new THREE.Color(params.innerColor);
    const outerColor = new THREE.Color(params.outerColor);

    for (let i = 0; i < params.starCount * 3; i++) {
        const i3 = i * 3;

        // Position
        const radius =
            THREE.MathUtils.seededRandom(i3 * params.galaxySeed) *
            params.radius;
        const spinAngle = radius * params.spin;
        const branchAngle =
            ((i % params.branches) / params.branches) * Math.PI * 2;

        const spread = {
            x:
                Math.pow(
                    THREE.MathUtils.seededRandom(i3 * params.galaxySeed + 1),
                    params.starPower
                ) *
                (THREE.MathUtils.seededRandom(i3 * params.galaxySeed) < 0.5
                    ? 1
                    : -1),
            y:
                Math.pow(
                    THREE.MathUtils.seededRandom(i3 * params.galaxySeed + 2),
                    params.starPower
                ) *
                (THREE.MathUtils.seededRandom(i3 * params.galaxySeed * 2) < 0.5
                    ? 1
                    : -1),
            z:
                Math.pow(
                    THREE.MathUtils.seededRandom(i3 * params.galaxySeed + 3),
                    params.starPower
                ) *
                (THREE.MathUtils.seededRandom(i3 * params.galaxySeed * 3) < 0.5
                    ? 1
                    : -1),
        };

        // x
        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + spread.x;
        // y
        positions[i3 + 1] = spread.y;
        // z
        positions[i3 + 2] =
            Math.sin(branchAngle + spinAngle) * radius + spread.z;

        // Color
        const mixedColor = innerColor
            .clone()
            .lerp(outerColor, radius / params.radius);
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        i += 2;
    }
}
