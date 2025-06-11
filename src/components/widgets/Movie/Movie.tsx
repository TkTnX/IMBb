import { MovieControls } from "@/components/features"

import { MovieHero } from "./MovieHero"
import { MovieInfo } from "./MovieInfo"
import { getRuntime } from "@/helpers/getRuntime"
import { IMovie, IMoviePeopleDetails } from "@/types/movie.interface"
import { MovieMeta } from "@/components/ui/MovieMeta"

type Props = {
	movie: IMovie
	cast: IMoviePeopleDetails
}

export const Movie = ({ movie, cast }: Props) => {
	return (
		<section id='Overview' className='flex-1'>
			<h1 className='text-4xl'>{movie.title}</h1>
			<div className='flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center justify-between mt-4'>
				<MovieMeta movie={movie} />
				<MovieControls rating={movie.rating} />
			</div>
			<MovieHero movie={movie} />
			<MovieInfo cast={cast} movie={movie} />
		</section>
	)
}
