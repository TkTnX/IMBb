import { AxiosError } from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { ITmdbMovie } from "@/types/movie.interface"

export const useMoviesList = () => {
	const [movies, setMovies] = useState<ITmdbMovie[]>([])
	const [error, setError] = useState<string | null>(null)
	const [_, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)
	const searchParams = useSearchParams()

	const params = useMemo(() => {
		const genres = searchParams.get("genres")
		const years = searchParams.get("years")
		const languages = searchParams.get("languages")
		const countries = searchParams.get("countries")
		const query = searchParams.get("query")

		return Object.fromEntries(
			Object.entries({
				with_genres: genres,
				primary_release_year: years,
				with_original_language: languages,
				countries,
				query
			}).filter(([_, value]) => value !== null && value !== "")
		) as Record<string, string>
	}, [searchParams])

	const fetchMovies = async (page = 1) => {
		setError(null)
		try {
			const query = new URLSearchParams({
				page: page.toString(),
				type: "discover",
				...params
			})
			const { data } = await axiosInstance.get(
				`/tmdb/movies?${query.toString()}`
			)
			if (data.message) {
				return setError(data.message)
			}
			if (page >= data.total_pages) {
				setHasMore(false)
			}

			setMovies(prev =>
				page === 1 ? data.results : [...prev, ...data.results]
			)

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
		setPage(1)
		setHasMore(true)
		fetchMovies(1)
	}, [params])

	const loadMore = () => {
		setPage(prev => {
			const nextPage = prev + 1
			fetchMovies(nextPage)
			return nextPage
		})
	}

	return { movies, error, loadMore, hasMore }
}
