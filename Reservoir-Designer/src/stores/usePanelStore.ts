import { create } from "zustand";

type PanelState = {
    isCollapsed: boolean;
    toggleCollapsed: () => void;
}

const usePanelStore = create<PanelState>((set) => ({

    isCollapsed: true,
    toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed }))
}));

export default usePanelStore;