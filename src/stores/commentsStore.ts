import { create } from "zustand";



import { axiosInstance } from "@/configs/axios.config";
import { IComment } from "@/types/comment.interface";





interface ICommentsStore {
	comments: IComment[]
	setComments: (comments: IComment[]) => void

	sortBy: string
	rating: string | null
	hideSpoilers: boolean
	loading: boolean
	demoComments: IComment[]
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
	async fetchDemoComments(id:number) {
		try {
			set({loading: true})
			const { data } = await axiosInstance.get(
				`/movies/${id}/comments?limit=2`
			)
			set({ demoComments: data })
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