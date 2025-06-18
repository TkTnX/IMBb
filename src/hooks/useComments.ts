import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { ITmdbComment } from "@/types/comment.interface"

export const useComments = (id: number) => {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [comments, setComments] = useState<ITmdbComment[]>([])
	const [hasMore, setHasMore] = useState(true)
	const [totalItems, setTotalItems] = useState(0)
	const [page, setPage] = useState(1)

	const fetchComments = async () => {
		setLoading(true)
		try {
			const { data } = await axiosInstance.get(
				`/trakt/movies/${id}/comments?page=${page}`
			)

			if (page >= data.total_pages) {
				setHasMore(false)
			}
			const newComments =
				page === 1 ? data.results : [...comments, ...data.results]
			setTotalItems(data.total_results)
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
		fetchComments()
	}, [open])

	useEffect(() => {
		fetchComments()
	}, [page])

	const loadMore = () => {
		if (!hasMore || loading) return
		setPage(prev => prev + 1)
	}

	return { comments, open, setOpen, loadMore, loading, hasMore, totalItems }
}
