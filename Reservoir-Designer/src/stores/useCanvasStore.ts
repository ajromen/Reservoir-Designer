import { Vector3, type Camera } from "three";
import { OrbitControls } from "three-stdlib";
import { create } from "zustand";

type CanvasStore = {
    zoom: number;
    zoomIn: () => void;
    zoomOut: () => void;
    setZoom: (zoom: number) => void;

    center: () => void;
    centerToObject: (width: number, length: number, height: number, position: [number, number, number], id: string) => void;

    color: string;
    setColor: (color: string) => void;

    length: number;
    setLength: (newLength: number) => void;

    radius: number;
    setRadius: (newRadius: number) => void;

    thickness: number;
    setThickness: (newThickness: number) => void;

    isHorizontal: boolean;
    setIsHorizontal: (isHorizontal: boolean) => void;

    camera: Camera | null;
    controls: OrbitControls | null;
    setCamera: (cam: Camera) => void;
    setControls: (controls: OrbitControls) => void;

    selectedId?: string;
    setSelected: (id?: string) => void;
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

        get().setZoom(1);

        // Assume the object is centered at origin and has size based on `length` and `radius`
        const length = get().length;
        const radius = get().radius;

        const boundingSize = Math.max(length, radius * 2);
        const distance = boundingSize / (2 * Math.tan((75 * Math.PI) / 360)); // fit in view

        const direction = camera.position.clone().sub(controls.target).normalize();
        const target = new Vector3(0, 0, 0); // center of object

        // Move camera back from center along direction
        const newPosition = target.clone().add(direction.multiplyScalar(distance * 1.7)); // add margin


        camera.position.copy(newPosition);
        controls.target.copy(target);
        controls.update();
    },

    centerToObject: (width, length, height, position, id) => {
        const selectedId = get().selectedId;

        if (selectedId == id)
            return;

        const camera = get().camera;
        const controls = get().controls;

        if (!camera || !controls) return;

        get().setZoom(1);

        const boundingSize = Math.max(length, height, width);
        const distance = boundingSize / (2 * Math.tan((75 * Math.PI) / 360));

        // Use the camera's current viewing direction
        const direction = camera.position.clone().sub(controls.target).normalize();
        const target = new Vector3(position[0], position[1], position[2]);

        const newPosition = target.clone().add(direction.multiplyScalar(distance * 1.3)); // add margin

        camera.position.copy(newPosition);
        controls.target.copy(target);
        controls.update();
    },


    color: "#1E1E1E",
    setColor: (color) => set({ color }),

    length: 2,
    setLength: (newLength) => set({ length: Math.max(0.2, newLength) }),

    radius: 0.8,
    setRadius: (newRadius) => set({ radius: Math.max(0.2, newRadius) }),

    thickness: 0.02,
    setThickness: (newThickness) => set({ thickness: newThickness }),

    isHorizontal: true,
    setIsHorizontal: (isHorizontal) => set({ isHorizontal }),

    camera: null,
    controls: null,
    setCamera: (cam) => set({ camera: cam }),
    setControls: (controls) => set({ controls }),

    selectedId: undefined,
    setSelected: (id) => set({ selectedId: id })
}));

export default useCanvasStore;