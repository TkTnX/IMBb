import { Dot } from "lucide-react"
import Link from "next/link"

import { MovieInfoItem } from "@/components/ui/MovieInfoItem"
import { MovieItem } from "@/components/ui/MovieItem"

import { formatNumber } from "@/helpers/formatNumber"
import { IMovie, IMoviePeopleDetails } from "@/types/movie.interface"

type Props = {
	movie: IMovie
	cast: IMoviePeopleDetails
}

export const MovieInfo = ({ movie, cast }: Props) => {
	const director = cast.crew.directing.find(
		director => director.job === "Director"
	)


	return (
		<div className='mt-5 flex items-start justify-between pb-14 border-b border-b-background-light-transparent-100'>
			<div className='flex flex-col gap-4'>
				<div className='flex items-start gap-10'>
					<p className='font-bold text-lg text-text-secondary'>
						Genre
					</p>
					<div className='flex items-center gap-2'>
						{movie.genres.map(genre => (
							<p
								className='rounded-[45px] py-2 px-4 bg-background-light-transparent-50'
								key={genre}
							>
								{genre[0].toUpperCase() + genre.slice(1)}
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
			<button className='flex items-center gap-2.5 bg-main-yellow rounded-lg py-2 px-4 text-black hover:opacity-80'>
				<span>{formatNumber(movie.votes)}</span>
				<Dot />
				<span className='flex-1 text-nowrap'>Add to Watchlist</span>
			</button>
		</div>
	)
}
