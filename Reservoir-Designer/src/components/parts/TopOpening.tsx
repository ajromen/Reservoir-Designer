import useCanvasStore from "../../stores/useCanvasStore";

interface TopOpeningProps {
    openingHeight?: number;
    openingRadius?: number;
    openingCapHeight?: number;
    offset: number;
}

function TopOpening({ openingHeight = 0.4, openingRadius = 0.3, openingCapHeight = 0.04, offset = 0 }: TopOpeningProps) {
    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    const color = useCanvasStore((s) => s.color);
    const centerToObject = useCanvasStore((s) => s.centerToObject);



    return (<>
        <group
            onClick={() => centerToObject(openingCapHeight + openingHeight, openingRadius * 2, openingRadius * 2 + 0.08, [length / 2 - openingRadius / 2 - 0.3 - offset * length / 2, radius, 0])}
            position={isHorizontal ?
                [length / 2 - openingRadius / 2 - 0.3 - offset * length / 2, radius, 0] :
                [Math.cos(offset) * (radius - openingRadius * 2), length / 2, Math.sin(offset) * (radius - openingRadius * 2)]
            }>
            <mesh>
                <cylinderGeometry args={[openingRadius, openingRadius, openingHeight, 20, 1, true]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <mesh
                position={[0, openingHeight / 2, 0]}
            >
                <cylinderGeometry args={[openingRadius + 0.04, openingRadius + 0.04, openingCapHeight, 20, 1, false]} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* bolts */}
            <group position={[0, openingHeight / 2, 0]}>
                {Array.from({ length: 10 }, (_, i) => {
                    const angle = (2 * Math.PI * i) / 10;
                    return (
                        <mesh
                            key={i}
                            position={[Math.sin(angle) * (openingRadius), 0, Math.cos(angle) * (openingRadius)]}>
                            <cylinderGeometry args={[0.01, 0.01, 0.06, 6, 1, false]} />
                            <meshStandardMaterial color={"#B1B1B1"} metalness={1} roughness={0.2} />
                        </mesh>
                    );
                })}
            </group>


        </group>
    </>);
}

export default TopOpening;