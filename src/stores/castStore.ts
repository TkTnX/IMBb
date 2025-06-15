import { AxiosError } from "axios"
import { create } from "zustand"

import { axiosInstance } from "@/configs/axios.config"
import { IMoviePeopleDetails } from "@/types/movie.interface"

interface castStore {
	cast: null | IMoviePeopleDetails
	loading: boolean
	error: null | string

	fetchCast: (slug: string) => Promise<void>
}

export const useCastStore = create<castStore>((set, get) => ({
	cast: null,
	loading: false,
	error: null,
	fetchCast: async slug => {
		set({ loading: true, error: null })
		try {
			const { data } = await axiosInstance.get(`/movies/${slug}/cast`, {
				timeout: 7000
			})
			set({ cast: data })
		} catch (error) {
			console.log(error)
			if (error instanceof AxiosError) {
				set({ error: error.message })
			} else {
				set({ error: "Something went wrong" })
			}
		} finally {
			set({ loading: false })
		}
	}
}))
