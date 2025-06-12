import { AxiosError } from "axios"
import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { IMovie, IMovieList } from "@/types/movie.interface"

export const useMoviesList = () => {
	const [movies, setMovies] = useState<IMovie[]>([])
	const [error, setError] = useState<string | null>(null)
	const [_, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)

	const fetchMovies = async (page = 1) => {
		setError(null)
		try {
			const { data } = await axiosInstance.get(
				`/movies?type=trending&page=${page}`
			)

			const movies = data.flatMap((item: IMovieList) => item.movie)

			if (movies.length === 0) {
				setHasMore(false)
			}

			setMovies(prev => (page === 1 ? movies : [...prev, ...movies]))

			return data
		} catch (error) {
			console.log(error)
			if (error instanceof AxiosError) {
				setError(error.message)
			} else {
				setError("Something went wrong!")
			}
		}
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	const loadMore = () => {
		setPage(prev => {
			const nextPage = prev + 1
			fetchMovies(nextPage)
			return nextPage
		})
	}

	return { movies, error, loadMore, hasMore }
}
