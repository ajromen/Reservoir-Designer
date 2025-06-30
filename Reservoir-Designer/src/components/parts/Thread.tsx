import { useEffect, useMemo } from "react";
import { TubeGeometry, CatmullRomCurve3, Vector3, MeshStandardMaterial } from "three";
import useCanvasStore from "../../stores/useCanvasStore";

function generateThreadCurve(width: number, height: number, thickness: number, resolution: number) {
    const curvePoints: Vector3[] = [];
    const radius = width + thickness / 4;
    const spacing = thickness * 2;
    const turns = Math.floor(height / spacing);
    const segmentsPerTurn = resolution;
    const totalSegments = turns * segmentsPerTurn;

    for (let i = 0; i < totalSegments; i++) {
        const t = i / totalSegments;
        const angle = t * Math.PI * 2 * turns;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (t - 0.5) * height;
        curvePoints.push(new Vector3(x, y, z));
    }

    return new CatmullRomCurve3(curvePoints);
}

export function Thread({
    thickness = 0.05,
    resolution = 100,
}: {
    thickness?: number;
    resolution?: number;
}) {
    const height = useCanvasStore((s) => s.length);
    const width = useCanvasStore((s) => s.radius);
    let color = useCanvasStore((s) => s.color);

    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    let rotation: [number, number, number] = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];


    useEffect(() => {
        rotation = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];
    }, [isHorizontal])

    const geometry = useMemo(() => {
        const curve = generateThreadCurve(width, height, thickness, resolution);
        const segments = resolution * Math.floor(height / (thickness * 2));
        return new TubeGeometry(curve, segments, thickness / 2, 10, false);
    }, [width, height, thickness, resolution]);

    const material = useMemo(() => new MeshStandardMaterial({ color }), [color]);

    return (
        <mesh geometry={geometry} material={material} rotation={rotation} />
    );
}
