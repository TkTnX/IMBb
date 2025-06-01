import type { Swiper as SwiperType } from "swiper"
import { create } from "zustand"

interface SwiperStore {
    swiper: SwiperType | null
    disabledButton: null | "prev" | "next"
    setSwiper: (swiper: SwiperType) => void
    setDisabledNumber: (number: null | "prev" | "next") => void
}

export const useSwiperStore = create<SwiperStore>(set => ({
    swiper: null,
    disabledButton: null,
    setSwiper: (swiper) => set({ swiper }),
    setDisabledNumber: (number) => set({ disabledButton: number })
    
}))
