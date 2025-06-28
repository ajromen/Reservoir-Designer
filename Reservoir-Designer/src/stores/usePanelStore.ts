import { create } from "zustand";

type PanelState = {
    leftSize: number;
    rightSize: number;
    setLeftSize: (size: number) => void;
    setRightSize: (size: number) => void;
}

const usePanelStore = create<PanelState>((set) => ({
    leftSize: 20,
    rightSize: 20,
    setLeftSize: (size) => set({ leftSize: size }),
    setRightSize: (size) => set({ rightSize: size }),
}));

export default usePanelStore;