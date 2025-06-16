import { AxiosError } from "axios"
import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { ITmdbActor } from "@/types/actor.interface"

export const usePopularActors = () => {
	const [actors, setActors] = useState<ITmdbActor[]>([])
	const [error, setError] = useState<null | string>(null)
	const [page, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		async function fetchData() {
			setError(null)
			try {
				const res = await axiosInstance.get("/person/popular", {
					params: { page }
				})
				setActors(prev => [...prev, ...res.data.results])
				setHasMore(page < res.data.total_pages)
				return res.data
			} catch (error) {
				console.log(error)
				return error instanceof AxiosError
					? setError(error.message)
					: setError("Something went wrong!")
			}
		}

		fetchData()
	}, [page])

	const loadMore = () => {
		setPage(page + 1)
	}

	return { actors, error, hasMore, loadMore }
}
