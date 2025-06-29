import { useEffect, useRef } from "react";
import useCanvasStore from "../../stores/useCanvasStore";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";



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
            <ambientLight />
            <pointLight />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="#0d0d0d" />
            </mesh>
            <OrbitControls ref={orbitControlsRef} />
        </>
    );
}

export default MyScene;