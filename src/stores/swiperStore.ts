import { RefObject } from "react"
import type { Swiper } from "swiper"
import { create } from "zustand"

type SwiperRefType = {
	section: string
	swiper: Swiper 
}

interface SwiperStore {
	swiperRefs: SwiperRefType[]
	setSwiperRefs: (section: string, swiper: Swiper) => void
}

export const useSwiperStore = create<SwiperStore>((set, get) => ({
	swiperRefs: [],
	setSwiperRefs: (section, swiper) =>
		set(state => ({
			swiperRefs: [...state.swiperRefs, { section, swiper }]
		}))
}))
