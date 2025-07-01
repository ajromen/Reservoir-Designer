import { useEffect, useRef } from "react";
import useCanvasStore from "../../stores/useCanvasStore";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { AdaptiveDpr, OrbitControls, Stage } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Reservoir from "./Reservoir";



function MyScene() {
    const orbitControlsRef = useRef<OrbitControlsImpl>(null);
    const setCamera = useCanvasStore((s) => s.setCamera);
    const setOrbitControls = useCanvasStore((s) => s.setControls);
    const targetZoom = useCanvasStore((s) => s.zoom);

    const { camera } = useThree();

    useEffect(() => {
        setCamera(camera);
    }, [camera]);

    useEffect(() => {
        if (orbitControlsRef.current) {
            setOrbitControls(orbitControlsRef.current);
        }
    }, []);


    useFrame(() => {
        // Use lerp for smooth zooming
        camera.zoom = MathUtils.lerp(camera.zoom, targetZoom, 0.1);
        camera.updateProjectionMatrix();
    });

    return (
        <>
            <AdaptiveDpr pixelated />{/* for preformance */}
            <Stage intensity={1} environment="city" >
                <Reservoir />
            </Stage>

            <OrbitControls ref={orbitControlsRef} minPolarAngle={Math.PI / 6}    // lowest vertical angle (30° above ground)
                maxPolarAngle={Math.PI / 2} />
        </>
    );
}

export default MyScene;