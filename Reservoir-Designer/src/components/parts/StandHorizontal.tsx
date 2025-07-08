import useCanvasStore from "../../stores/useCanvasStore";

const standWidth = 0.25;
const gap = 1.5;
const standThickness = 0.05;



function Stand({ positionX, radius, color }: { positionX: number, radius: number, color: string }) {
    // return (<mesh
    //     position={[positionX, -radius / 2 - 0.04, 0]}
    // >
    //     <boxGeometry args={[standWidth, radius, radius * 2 *0.9]} />
    //     <meshStandardMaterial color={color} />
    // </mesh>)

    return (
        <group
            position={[positionX, -radius / 2 - 0.04, 0]}>
            {/* left */}
            <mesh
                position={[-standWidth / 2, 0, 0]}>
                <boxGeometry args={[standThickness, radius, radius * 2 * 0.9]} />
                <meshStandardMaterial color={color} />
            </mesh>
            {/* right */}
            <mesh
                position={[standWidth / 2, 0, 0]}>
                <boxGeometry args={[standThickness, radius, radius * 2 * 0.9]} />
                <meshStandardMaterial color={color} />
            </mesh>
            {/* bottom */}
            <mesh
                position={[0, -radius / 2 + standThickness / 2, 0]}>
                <boxGeometry args={[standWidth, standThickness, radius * 2 * 0.9]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </group>
    );
}

function StandHorizontal() {

    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    const color = useCanvasStore((s) => s.color);


    let numOfSegs = Math.floor((length - gap * 2) / gap);
    let currGap = 0

    if (numOfSegs > 0)
        currGap = (length - 2 * gap) / numOfSegs;
    else
        numOfSegs = 0;

    let startPos = 0;
    if (numOfSegs % 2 == 1)
        startPos = currGap;
    else
        startPos = currGap / 2;


    return (<>
        {isHorizontal && (<group>

            {/* ends */}
            <Stand positionX={length / 2 - standWidth / 2 - 0.07} radius={radius} color={color} />
            <Stand positionX={-length / 2 + standWidth / 2 + 0.07} radius={radius} color={color} />


            {/* central */}
            {numOfSegs % 2 == 1 && (
                <Stand positionX={0} radius={radius} color={color} />
            )}

            {/* middle */}
            {Array.from({ length: numOfSegs / 2 }, (_, i) => (
                <>
                    <Stand
                        key={i}
                        positionX={startPos + i * currGap}
                        radius={radius}
                        color={color}
                    />
                    <Stand
                        key={i + numOfSegs}
                        positionX={-startPos - i * currGap}
                        radius={radius}
                        color={color}
                    />
                </>
            ))}

        </group>)}
    </>);

}

export default StandHorizontal;