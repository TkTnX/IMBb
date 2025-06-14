import { create } from "zustand"

import { axiosInstance } from "@/configs/axios.config"
import { IMoviePeopleDetails } from "@/types/movie.interface"

interface castStore {
	cast: null | IMoviePeopleDetails
	loading: boolean

	fetchCast: (slug: string) => Promise<void>
}

export const useCastStore = create<castStore>((set, get) => ({
	cast: null,
	loading: false,
	fetchCast: async slug => {
		set({ loading: true })
		try {
			const { data } = await axiosInstance.get(`/movies/${slug}/cast`)

			set({ cast: data })
		} catch (error) {
			console.log(error)
		} finally {
			set({ loading: false })
		}
	}
}))
