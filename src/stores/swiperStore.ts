import { create } from "zustand"

interface SwiperStore {
    prevRef: React.RefObject<HTMLButtonElement> | null
    nextRef: React.RefObject<HTMLButtonElement> | null

    setPrevRef: (ref: React.RefObject<HTMLButtonElement>) => void
    setNextRef: (ref: React.RefObject<HTMLButtonElement>) => void
}

export const useSwiperStore = create<SwiperStore>((set, get) => ({
    prevRef: null,
    nextRef: null,

    setPrevRef: (ref: React.RefObject<HTMLButtonElement>) => set({ prevRef: ref }),
    setNextRef: (ref: React.RefObject<HTMLButtonElement>) => set({ nextRef: ref }),
}))