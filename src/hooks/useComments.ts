import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { useCommentsStore } from "@/stores/commentsStore"
import { IComment } from "@/types/comment.interface"

export const useComments = (slug: string) => {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const { sortBy, rating, hideSpoilers, setComments } = useCommentsStore()
	const [comments, setLocalComments] = useState<IComment[]>([])
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(1)

	const fetchComments = async (pageToLoad: number) => {
		setLoading(true)
		try {
			const { data } = await axiosInstance.get(
				`/movies/${slug}/comments?sortBy=${sortBy}&page=${pageToLoad}`
			)

			if (data.length === 0) {
				setHasMore(false)
			}

			const filteredComments = data
				.filter(
					(comment: IComment) => !hideSpoilers || !comment.spoiler
				)
				.sort((a: IComment, b: IComment) => {
					if (rating === "Asc") return a.user_rating - b.user_rating
					if (rating === "Desc") return b.user_rating - a.user_rating
					return 0
				})

			filteredComments.length === 0 ? setHasMore(false) : setHasMore(true)

			const newComments =
				page === 1
					? filteredComments
					: [...comments, ...filteredComments]

			setLocalComments(newComments)
			setComments(newComments)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!open) return
		setPage(1)
		fetchComments(1)
	}, [open])

	useEffect(() => {
		if (!open) return
		setPage(1)
		fetchComments(1)
	}, [sortBy, rating, hideSpoilers])

	const loadMore = () => {
		console.log("message")
		const nextPage = page + 1
		setPage(nextPage)
		fetchComments(nextPage)
	}

	return { comments, open, setOpen, loadMore, loading, hasMore }
}
