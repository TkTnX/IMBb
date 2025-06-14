"use client"

import { Dot } from "lucide-react"
import { useEffect } from "react"

import { MovieInfoItem } from "@/components/ui/MovieInfoItem"

import { axiosInstance } from "@/configs/axios.config"
import { formatNumber } from "@/helpers/formatNumber"
import { useCastStore } from "@/stores/castStore"
import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const MovieInfo = ({ movie }: Props) => {
	const { fetchCast, cast } = useCastStore()
	const director =
		cast &&
		cast.crew.directing.find(director => director.job === "Director")

	useEffect(() => {
		fetchCast(movie.ids.slug)
	}, [])


	if (!cast) return null
	return (
		<div className='mt-5 flex-col-reverse gap-10 lg:gap-0 lg:flex-row flex items-start justify-between pb-14 border-b border-b-background-light-transparent-100'>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col sm:flex-row items-start gap-2 sm:gap-10'>
					<p className='font-bold text-lg text-text-secondary'>
						Genre
					</p>
					<div className='flex items-center gap-2 flex-wrap vsm:flex-nowrap'>
						{movie.genres.map(genre => (
							<p
								className='rounded-[45px] py-2 px-4 bg-background-light-transparent-50 capitalize'
								key={genre}
							>
								{genre}
							</p>
						))}
					</div>
				</div>
				<MovieInfoItem title='Plot' items={[movie.overview]} />

				<MovieInfoItem title='Director' items={[director!]} />

				<MovieInfoItem title='Writers' items={cast.crew.writing} />
				<MovieInfoItem title='Actors' items={cast.cast} />
				<MovieInfoItem
					title='Translations'
					items={movie.available_translations}
				/>
			</div>
			<button className='w-full md:w-auto justify-center md:justify-start flex items-center md:gap-2.5 bg-main-yellow rounded-lg py-2 px-4 text-black hover:opacity-80'>
				<span>{formatNumber(movie.votes)}</span>
				<Dot />
				<span className='md:flex-1 md:text-nowrap'>
					Add to Watchlist
				</span>
			</button>
		</div>
	)
}
