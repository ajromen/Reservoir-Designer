import { Vector3, type Camera } from "three";
import { OrbitControls } from "three-stdlib";
import { create } from "zustand";

type CanvasStore = {
    zoom: number;
    zoomIn: () => void;
    zoomOut: () => void;
    setZoom: (zoom: number) => void;

    center: () => void;

    color: string;
    setColor: (color: string) => void;

    length: number;
    setLength: (newLength: number) => void;

    radius: number;
    setRadius: (newRadius: number) => void;

    orientation: string;
    setOrientation: (orientation: string) => void;

    camera: Camera | null;
    controls: OrbitControls | null;
    setCamera: (cam: Camera) => void;
    setControls: (controls: OrbitControls) => void;
}

const useCanvasStore = create<CanvasStore>((set, get) => ({
    zoom: 1,
    zoomIn: () => set((state) => ({ zoom: state.zoom + 0.1 })),
    zoomOut: () => set((state) => ({ zoom: Math.max(0.2, state.zoom - 0.1) })),
    setZoom: (zoom) => set({ zoom: Math.max(0.2, zoom) }),

    center: () => {
        const camera = get().camera;
        const controls = get().controls;

        if (!camera || !controls) return;

        const centerPoint = new Vector3(0, 0, 0); // Object center
        // or any good "default" viewing position
        controls.target.copy(centerPoint);
        camera.rotation.set(0, 0, 0);
        controls.update();
    },

    color: "#1E1E1E",
    setColor: (color) => set({ color }),

    length: 2,
    setLength: (newLength) => set({ length: newLength }),

    radius: 0.8,
    setRadius: (newRadius) => set({ radius: newRadius }),

    orientation: "horizontal",
    setOrientation: (orientation) => set({ orientation }),

    camera: null,
    controls: null,
    setCamera: (cam) => set({ camera: cam }),
    setControls: (controls) => set({ controls }),
}));

export default useCanvasStore;