import { Canvas } from "@react-three/fiber";
import OverlayControls from "../panels/OverlayControls";
import MyScene from "./MyScene";



function CanvasArea() {
    return (
        <div className="relative w-full h-full">
            <OverlayControls />
            <Canvas style={{ background: "#1E1E1E" }}>
                <MyScene />
            </Canvas>
        </div>
    );
}

export default CanvasArea;
