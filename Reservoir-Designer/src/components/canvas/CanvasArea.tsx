import { Canvas } from "@react-three/fiber";
import OverlayControls from "../panels/OverlayControls";
import { OrbitControls } from "@react-three/drei";

function CanvasArea() {

    
    return (
        <div className="relative w-full h-full">
            <OverlayControls />
            <Canvas style={{ background: "#1E1E1E" }}>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color={"#0d0d0d"} />
                </mesh>
                <ambientLight />
                <pointLight />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default CanvasArea