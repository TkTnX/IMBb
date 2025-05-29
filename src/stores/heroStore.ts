import { create } from "zustand"

interface HeroStore {
	currentMovieIndex: string | null
	setCurrentMovieIndex: (index: string) => void
}

export const useHeroStore = create<HeroStore>((set, get) => ({
	currentMovieIndex: null,
	setCurrentMovieIndex: index => set({ currentMovieIndex: index })
}))
