import * as THREE from "three";


function Input({
    inputLength = 0.1,
    inputRadius = 0.05,
    inputThickness = 0.01,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    color = '#C73BB4' }:
    {
        inputLength?: number,
        inputRadius?: number,
        inputThickness?: number,
        position?: [number, number, number],
        rotation?: [number, number, number],
        color?: string
    }) {
    return (<group
        position={position}
        rotation={[rotation[0], rotation[1], rotation[2] + Math.PI / 2]}>
        {/* outer */}
        <mesh>
            <cylinderGeometry args={[inputRadius, inputRadius, inputLength, 20, 1, true]} />
            <meshStandardMaterial color={color} />
        </mesh>
        {/* inner */}
        <mesh>
            <cylinderGeometry args={[inputRadius - inputThickness, inputRadius - inputThickness, inputLength, 20, 1, true]} />
            <meshStandardMaterial color={color} side={THREE.BackSide} />
        </mesh>

        {/* ring left */}
        <mesh
            position={[0, -inputLength / 2, 0]}
            rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[inputRadius - inputThickness, inputRadius]} />
            <meshStandardMaterial color={color} side={THREE.DoubleSide} />
        </mesh>
        {/* ring right */}
        <mesh
            position={[0, inputLength / 2, 0]}
            rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[inputRadius - inputThickness, inputRadius]} />
            <meshStandardMaterial color={color} side={THREE.DoubleSide} />
        </mesh>
    </group>)
}
export default Input;