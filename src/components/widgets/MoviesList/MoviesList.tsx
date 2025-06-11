"use client"

import { useEffect, useState } from "react"

import { MoviesFilters } from "@/components/features"
import { BigMovieItem } from "@/components/ui/BigMovieItem"

import { axiosInstance } from "@/configs/axios.config"
import { IMovie, IMovieList } from "@/types/movie.interface"

export const MoviesList = () => {
	const [movies, setMovies] = useState<IMovie[]>([])
	useEffect(() => {
		const fetchMovies = async () => {
			const { data } = await axiosInstance.get(`/movies?type=trending`)
			const movies = data.flatMap((item: IMovieList) => item.movie)
			setMovies(movies)
			return data
		}

		fetchMovies()
	}, [])

	return (
		<div className='flex items-start gap-8 h-full'>
			{/* ФИЛЬТРАЦИЯ */}
			<MoviesFilters />

			{/* СПИСОК */}
			<div className="flex flex-col gap-10 flex-1">
				{movies.map(movie => (
					<BigMovieItem key={movie.ids.slug} movie={movie} />
				))}
			</div>
		</div>
	)
}
