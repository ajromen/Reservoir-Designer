import { useEffect, useState } from "react";
import useCanvasStore from "../../stores/useCanvasStore";

function Reservoir() {

    const length = useCanvasStore((s) => s.length)
    const radius = useCanvasStore((s) => s.radius)
    const orientation = useCanvasStore((s) => s.orientation)
    const color = useCanvasStore((s) => s.color);

    let rotation: [number, number, number] = orientation == 'horizontal' ? [0, 0, Math.PI / 2] : [0, 0, 0];

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        rotation = orientation == 'horizontal' ? [0, 0, Math.PI / 2] : [0, 0, 0];
    }, [orientation])

    return (
        <mesh
            rotation={rotation}
            onPointerEnter={(event) => {
                event.stopPropagation();
                setIsHovered(true);
            }}
            onPointerLeave={() => { }}
            onClick={() => { }}
        >
            <cylinderGeometry args={[radius, radius, length, 50, 1, false]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default Reservoir;