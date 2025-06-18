import { create } from "zustand"

import { axiosInstance } from "@/configs/axios.config"
import { ITmdbComment } from "@/types/comment.interface"

interface ICommentsStore {
	comments: ITmdbComment[]
	setComments: (comments: ITmdbComment[]) => void

	sortBy: string
	rating: string | null
	hideSpoilers: boolean
	loading: boolean
	demoComments: ITmdbComment[]
	fetchDemoComments: (id: number) => void
	setSortBy: (sortBy: string) => void
	setRating: (rating: string) => void
	setHideSpoilers: (hideSpoilers: boolean) => void
}

export const useCommentsStore = create<ICommentsStore>(set => ({
	comments: [],
	sortBy: "newest",
	rating: null,
	hideSpoilers: false,
	loading: false,
	demoComments: [],
	async fetchDemoComments(id: number) {
		try {
			set({ loading: true })
			const { data } = await axiosInstance.get(
				`/tmdb/movies/${id}/comments?limit=2`
			)
			set({ demoComments: data.results })
		} catch (error) {
			console.log(error)
		} finally {
			set({ loading: false })
		}
	},
	setComments(comments) {
		set({ comments })
	},
	setSortBy(sortBy) {
		set({ sortBy })
	},
	setRating(rating) {
		if (rating === "0") set({ rating: null })
		set({ rating })
	},
	setHideSpoilers(hideSpoilers) {
		set({ hideSpoilers })
	}
}))
