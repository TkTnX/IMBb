import { AxiosError } from "axios"
import { create } from "zustand"

import { axiosInstance } from "@/configs/axios.config"
import { IMoviePeopleDetails } from "@/types/movie.interface"

interface castStore {
	credits: null | IMoviePeopleDetails
	loading: boolean
	error: null | string

	fetchCredits: (id: number) => Promise<void>
}

export const useCastStore = create<castStore>((set, get) => ({
	credits: null,
	loading: false,
	error: null,
	fetchCredits: async id => {
		set({ loading: true, error: null })
		try {
			const { data } = await axiosInstance.get(`/movies/${id}/cast`)
			set({ credits: data })
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
