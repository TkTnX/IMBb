import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { useTrailersStore } from "@/stores/trailersStore"
import { IMovie, IMovieList } from "@/types/movie.interface"

export const useTrailers = () => {
	const [movies, setMovies] = useState<IMovie[]>([])
	const [loading, setLoading] = useState(false)
	const { page, setPage, currentTab } = useTrailersStore()

	useEffect(() => {
		setMovies([])
		setPage(1)
		fetchMovies(1)
	}, [currentTab])

	useEffect(() => {
		if (page !== 1) {
			fetchMovies(page)
		}
	}, [page])

	const fetchMovies = async (page: number) => {
		try {
			setLoading(true)
			const { data } = await axiosInstance.get(
				`/movies?type=${currentTab}&page=${page}&limit=12`
			)

			const newMovies = data[0].movie
				? data
						.flatMap((item: IMovieList) => item.movie)
						.filter((movie: IMovie) => !!movie.trailer)
				: data.filter((movie: IMovie) => !!movie.trailer)

			if (data) {
				setMovies(prev => [...prev, ...newMovies])
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleLoadMore = () => {
		setPage(page + 1)
	}

	return {
		movies,
		loading,
		handleLoadMore
	}
}
