
import Image from "next/image";



import { MovieControls } from "@/components/features";



import { MovieInfo } from "./MovieInfo";
import { getAvailableImages } from "@/helpers/getAvailableImages";
import { getRuntime } from "@/helpers/getRuntime";
import { IMovie, IMoviePeopleDetails } from "@/types/movie.interface";
import { MovieHero } from "./MovieHero";
import { MoviePhotos } from "./MoviePhotos";





type Props = {
	movie: IMovie
	cast: IMoviePeopleDetails
}

export const Movie = ({ movie, cast }: Props) => {
	return (
		<section >
			<h1 className='text-4xl'>{movie.title}</h1>
			<div className='flex items-center justify-between mt-4'>
				<div className='flex items-center gap-2.5 text-text-secondary'>
					<p>{movie.year}</p>

					{movie.certification && (
						<>
							<div className='w-1 h-1 rounded-full bg-text-secondary' />{" "}
							<p>{movie.certification}</p>
						</>
					)}
					{movie.runtime && (
						<>
							<div className='w-1 h-1 rounded-full bg-text-secondary' />
							<p>{getRuntime(movie.runtime)}</p>
						</>
					)}
				</div>
				<MovieControls rating={movie.rating} />
			</div>
			<MovieHero movie={movie} />
			<MovieInfo cast={cast} movie={movie} />
		</section>
	)
}