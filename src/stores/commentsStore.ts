import { create } from "zustand"

import { IComment } from "@/types/comment.interface"

interface ICommentsStore {
	comments: IComment[]
	setComments: (comments: IComment[]) => void

	sortBy: string
	rating: string | null
	hideSpoilers: boolean
	setSortBy: (sortBy: string) => void
	setRating: (rating: string) => void
	setHideSpoilers: (hideSpoilers: boolean) => void
}

export const useCommentsStore = create<ICommentsStore>(set => ({
	comments: [],
	sortBy: "newest",
	rating: null,
	hideSpoilers: false,
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
