import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { useCommentsStore } from "@/stores/commentsStore"
import { IComment } from "@/types/comment.interface"

export const useComments = (slug: string) => {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const { sortBy, rating, hideSpoilers, comments, setComments } =
		useCommentsStore()
	const [page, setPage] = useState(1)

	useEffect(() => {
		if (open) {
			const fetchComments = async () => {
				setLoading(true)
				try {
					const { data } = await axiosInstance.get(
						`/movies/${slug}/comments?sortBy=${sortBy}&page=${page}`
					)

					const filteredComments = data
						.filter((comment: IComment) =>
							Number(rating) === 1
								? comment.user_rating === 1
								: Number(rating) === 3
									? comment.user_rating <= 5
									: comment.user_rating > 5
						)
						.filter(
							(comment: IComment) =>
								!hideSpoilers || !comment.spoiler
						)
					setComments([...comments, ...filteredComments])
				} catch (error) {
					console.log(error)
				} finally {
					setLoading(false)
				}
			}

			fetchComments()
		}
	}, [open, sortBy, hideSpoilers, rating, page])

	const loadMore = () => setPage(page + 1)

	return { comments, open, setOpen, loadMore, loading }
}
