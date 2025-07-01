import { useEffect, useLayoutEffect, useRef } from "react";
import useCanvasStore from "../../stores/useCanvasStore";
import { Thread } from "../parts/Thread";

import * as THREE from 'three';
import { useMemo } from 'react';

function HollowCylinderGeometry({ }) {

    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);

    const innerRadius = radius - 0.03;

    const radialSegments = 80

    const ref = useRef<THREE.ExtrudeGeometry>(null)
    const { arcShape, options } = useMemo(() => {
        const arcShape = new THREE.Shape()
        arcShape.moveTo(radius * 2, radius)
        arcShape.absarc(radius, radius, radius, 0, Math.PI * 2, false)
        const holePath = new THREE.Path()
        holePath.moveTo(radius + innerRadius, radius)
        holePath.absarc(radius, radius, innerRadius, 0, Math.PI * 2, true)
        arcShape.holes.push(holePath)
        const options = {
            depth: length,
            bevelEnabled: false,
            steps: 1,
            curveSegments: radialSegments / 2,
        }
        return { arcShape, options }
    }, [])
    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.center();
        }
    }, [])
    return <extrudeGeometry ref={ref} args={[arcShape, options]} />
}


function Reservoir() {

    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    const color = useCanvasStore((s) => s.color);

    let rotation: [number, number, number] = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];


    useEffect(() => {
        rotation = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];
    }, [isHorizontal])

    return (
        <>
            <mesh
                rotation={rotation}
                onClick={() => { }}
            >
                <cylinderGeometry args={[radius, radius, length, 50, 1, false]} />
                <meshStandardMaterial color={color} />
            </mesh>
            {/* Cone at the end of the cylinder */}
            <mesh
                rotation={rotation}
                position={
                    [-length+0.91, 0,0]
                }
            >
                <coneGeometry args={[radius, 0.2, 50]} />
                <meshStandardMaterial color={color} />
            </mesh>
            {/* <HollowCylinder radius={radius} thickness={0.2} height={length} color={color} rotation={rotation} /> */}
            <Thread />
        </>
    );
}

export default Reservoir;