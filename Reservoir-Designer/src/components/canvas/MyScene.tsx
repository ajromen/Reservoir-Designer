import { useEffect, useRef } from "react";
import useCanvasStore from "../../stores/useCanvasStore";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { AdaptiveDpr, OrbitControls, Stage } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Reservoir from "./Reservoir";
import PartsMenager from "./ParstMenager";



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
        camera.zoom = MathUtils.lerp(camera.zoom, targetZoom, 0.1);
        camera.updateProjectionMatrix();
    });

    return (
        <>
            <AdaptiveDpr pixelated />
            <Stage intensity={1} environment="city" shadows={false}>
                <Reservoir />
                <PartsMenager />
            </Stage>

            {/* <OrbitControls ref={orbitControlsRef} minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2} /> */}
            <OrbitControls ref={orbitControlsRef} minPolarAngle={0}
                maxPolarAngle={Math.PI*2} />
        </>
    );
}

export default MyScene;