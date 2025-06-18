"use client"

import { Dot } from "lucide-react"
import { useEffect } from "react"

import { MovieInfoItem } from "@/components/ui/MovieInfoItem"
import { Skeleton } from "@/components/ui/skeleton"

import { formatNumber } from "@/helpers/formatNumber"
import { useCastStore } from "@/stores/castStore"
import { ITmdbMovieDetailed } from "@/types/movie.interface"

type Props = {
	movie: ITmdbMovieDetailed
}

export const MovieInfo = ({ movie }: Props) => {
	const { fetchCredits, credits, loading, error } = useCastStore()

	useEffect(() => {
		fetchCredits(movie.id)
	}, [])
	const director = credits?.crew.find(director => director.job === "Director")
	return (
		<div className='mt-5 flex-col-reverse gap-10 lg:gap-4 lg:flex-row  flex items-start justify-between pb-14 border-b border-b-background-light-transparent-100'>
			{error ? (
				<p className='text-center text-red-500 my-10'>{error}</p>
			) : (
				<div className='flex flex-col gap-4 w-full'>
					{loading || (!credits && !error) ? (
						[...new Array(3)].map((_, index) => (
							<div key={index} className='flex gap-10 w-full'>
								<Skeleton className='w-[100px] h-7 ' />
								<Skeleton className='w-full h-24' />
							</div>
						))
					) : (
						<>
							<div className='flex flex-col sm:flex-row items-start gap-2 sm:gap-10'>
								<p className='font-bold text-lg text-text-secondary'>
									Genre
								</p>
								<div className='flex items-center gap-2 flex-wrap vsm:flex-nowrap'>
									{movie.genres.map(genre => (
										<p
											className='rounded-[45px] py-2 px-4 bg-background-light-transparent-50 capitalize'
											key={genre.id}
										>
											{genre.name}
										</p>
									))}
								</div>
							</div>
							<MovieInfoItem
								title='Plot'
								items={[movie.overview]}
							/>

							{director && (
								<MovieInfoItem
									title='Director'
									items={[director.name]}
								/>
							)}

							<MovieInfoItem
								title='Writers'
								items={
									credits?.crew.filter(
										person =>
											person.department === "Writing"
									) || []
								}
							/>
							<MovieInfoItem
								title='Actors'
								items={credits?.cast || []}
							/>
							{movie.spoken_languages.length > 0 && (
								<MovieInfoItem
									title='Translations'
									items={movie.spoken_languages.flatMap(
										item => item.english_name
									)}
								/>
							)}
						</>
					)}
				</div>
			)}

			<button className='w-full md:w-auto justify-center md:justify-start flex items-center md:gap-2.5 bg-main-yellow rounded-lg py-2 px-4 text-black hover:opacity-80'>
				<span>{formatNumber(movie.vote_count)}</span>
				<Dot />
				<span className='md:flex-1 md:text-nowrap'>
					Add to Watchlist
				</span>
			</button>
		</div>
	)
}
