import { Dot } from "lucide-react"

import { formatNumber } from "@/helpers/formatNumber"
import { IMovie, IMoviePeopleDetails } from "@/types/movie.interface"

type Props = {
	movie: IMovie
	cast: IMoviePeopleDetails
}

export const MovieInfo = ({ movie, cast }: Props) => {
	return (
		<div className='mt-5 flex items-start justify-between'>
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
				<div className='flex items-start gap-10'>
					<p className='font-bold text-lg text-text-secondary'>
						Plot
					</p>
					<p>{movie.overview}</p>
				</div>
				<div className='flex items-start gap-10'>
					<p className='font-bold text-lg text-text-secondary'>
						Director
					</p>
					{cast.crew.directing.map(director => (
						<p
							key={director.person.name}
							className='text-main-yellow-sec-dark'
						>
							{director.person.name}
						</p>
					))}
				</div>
				<div className='flex items-start gap-10'>
					<p className='font-bold text-lg text-text-secondary'>
						Writers
					</p>
					{cast.crew.writing.map(writer => (
						<p
							key={writer.person.name}
							className='text-main-yellow-sec-dark'
						>
							{writer.person.name}
						</p>
					))}
				</div>
			</div>
			<button className='flex items-center gap-2.5 bg-main-yellow rounded-lg py-2 px-4 text-black hover:opacity-80'>
				<span>{formatNumber(movie.votes)}</span>
				<Dot />
				<span>Add to Watchlist</span>
			</button>
		</div>
	)
}
