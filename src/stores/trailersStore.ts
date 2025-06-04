import { create } from "zustand";

interface TrailersStore {
    page: number,
    setPage: (page: number) => void;
    currentTab: string;
    setCurrentTab: (tab: string) => void;

    
}

export const useTrailersStore = create<TrailersStore>((set, get) => ({
    page: 1,
currentTab: "trending",
    setPage: page => set({ page }),
setCurrentTab: tab => set({ currentTab: tab }),

}))