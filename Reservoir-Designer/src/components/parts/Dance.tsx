import { useEffect } from "react";
import useCanvasStore from "../../stores/useCanvasStore";

const danceWidth = 0.2;
const danceSetBack = 0.07;

function Dance() {
    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    const color = useCanvasStore((s) => s.color);
    const centerToObject = useCanvasStore((s) => s.centerToObject);

    let rotation: [number, number, number] = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];




    useEffect(() => {
        rotation = isHorizontal ? [0, 0, Math.PI / 2] : [0, 0, 0];
    }, [isHorizontal])


    return (<group
        onClick={() => centerToObject(radius, radius*2, radius, [-length / 2 - danceWidth / 2 + danceSetBack, 0, 0])}>
        {isHorizontal && (
            <mesh
                rotation={rotation}
                position={[-length / 2 - danceWidth / 2 + danceSetBack, 0, 0]}
            >
                <coneGeometry args={[radius, danceWidth, 50]} />
                <meshStandardMaterial color={color} flatShading={false} />
            </mesh>
        )}

        <mesh
            rotation={[rotation[0], rotation[1] + Math.PI, rotation[2]]}
            position={
                isHorizontal ?
                    [length / 2 + danceWidth / 2 - danceSetBack, 0, 0] :
                    [0, length / 2 + danceWidth / 2 - danceSetBack, 0]
            }
        >
            <coneGeometry args={[radius, danceWidth, 50]} />
            <meshStandardMaterial color={color} flatShading={false} />
        </mesh>

        {/* <mesh>
            <boxGeometry args={[]} />
        </mesh> */}
    </group>)
}

export default Dance;