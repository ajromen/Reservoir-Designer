import { useEffect } from "react";
import useCanvasStore from "../../stores/useCanvasStore";
import * as THREE from "three";


function Reservoir() {

    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    const color = useCanvasStore((s) => s.color);
    const thickness = useCanvasStore((s) => s.thickness);

    let rotation: [number, number, number] = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];




    useEffect(() => {
        rotation = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];
    }, [isHorizontal])

    return (
        <>
            {/* outer */}
            <mesh rotation={rotation}>
                <cylinderGeometry args={[radius, radius, length, 50, 1, true]} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* inner */}
            <mesh rotation={rotation}>
                <cylinderGeometry args={[radius - thickness, radius - thickness, length, 50, 1, true]} />
                <meshStandardMaterial color={color} side={THREE.BackSide} />
            </mesh>

            {/* left/top */}
            <mesh rotation={isHorizontal ? [0, Math.PI / 2, 0] : [Math.PI / 2, 0, 0]}
                position={
                    isHorizontal ?
                        [length / 2, 0, 0] :
                        [0, length / 2, 0]
                }>

                <ringGeometry args={[radius - thickness, radius, 50, 50]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} />
            </mesh>

            {/* right/bottom */}
            {isHorizontal &&
                <mesh
                    rotation={isHorizontal ? [0, Math.PI / 2, 0] : [Math.PI / 2, 0, 0]}
                    position={[-length / 2, 0, 0]}>

                    <ringGeometry args={[radius - thickness, radius, 50, 50]} />
                    <meshStandardMaterial color={color} side={THREE.DoubleSide} />
                </mesh>
            }
            
            {/* bottom if vert */}
            {!isHorizontal &&
                <mesh rotation={[Math.PI / 2, 0, 0]}
                    position={[0, -length / 2, 0]}>
                    <circleGeometry args={[radius, 20]} />
                    <meshStandardMaterial color={color} side={THREE.DoubleSide} />
                </mesh>
            }
        </>
    );
}

export default Reservoir;