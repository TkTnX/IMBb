import { MovieControls } from "@/components/features"

import { MovieHero } from "./MovieHero"
import { MovieInfo } from "./MovieInfo"
import { ITmdbMovieDetailed } from "@/types/movie.interface"

type Props = {
	movie: ITmdbMovieDetailed
}

export const Movie = ({ movie }: Props) => {
	return (
		<section id='Overview' className='flex-1'>
			<h1 className='text-4xl'>{movie.title}</h1>
			<div className='flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center justify-between mt-4'>
				<p className='text-text-secondary'>
					{new Date(movie.release_date).getFullYear()}
				</p>
				<MovieControls rating={movie.vote_average} />
			</div>
			<MovieHero movie={movie} />
			<MovieInfo movie={movie} />
		</section>
	)
}
