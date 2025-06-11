import { AxiosError } from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { IMovie, IMovieList } from "@/types/movie.interface"

export const useMoviesList = () => {
	const [movies, setMovies] = useState<IMovie[]>([])
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)
	const searchParams = useSearchParams()

	const genres = searchParams.get("genres")
	const years = searchParams.get("years")
	const languages = searchParams.get("languages")
	const countries = searchParams.get("countries")

	const params = Object.fromEntries(
		Object.entries({
			genres,
			years,
			languages,
			countries
		}).filter(([_, value]) => value !== null)
	) as Record<string, string>

	const fetchMovies = async (page = 1) => {
		setError(null)
		try {
			const { data } = await axiosInstance.get(
				`/movies?type=trending&${new URLSearchParams(params).toString()}&page=${page}`
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
		const nextPage = page + 1
		setPage(nextPage)
		fetchMovies(nextPage)
	}

	return { movies, error, loadMore, hasMore }
}
