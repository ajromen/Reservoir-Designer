import { useEffect } from "react";
import useCanvasStore from "../../stores/useCanvasStore";
import { Thread } from "../parts/Thread";

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
            <Thread />
        </>
    );
}

export default Reservoir;