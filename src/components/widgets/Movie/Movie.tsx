import Image from "next/image";



import { MovieControls } from "@/components/features";



import { MovieInfo } from "./MovieInfo";
import { getAvailableImages } from "@/helpers/getAvailableImages";
import { getRuntime } from "@/helpers/getRuntime";
import { IMovie, IMoviePeopleDetails } from "@/types/movie.interface";





type Props = {
	movie: IMovie
	cast: IMoviePeopleDetails
}

export const Movie = ({ movie, cast }: Props) => {
	return (
		<section className='flex-1'>
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
			<div className='h-[490px] flex items-start gap-6 mt-5'>
				<div className='relative w-full max-w-[340px] h-full rounded overflow-hidden'>
					<Image
						src={`https://${movie.images.poster[0]}`}
						alt={movie.title}
						fill
						className='object-cover'
					/>
				</div>
				<div className='flex-1 h-full relative rounded overflow-hidden'>
					<Image
						fill
						src={`https://${getAvailableImages(movie)[0]}`}
						alt={movie.title}
						className='object-cover '
					/>
				</div>
			</div>
			<MovieInfo cast={cast} movie={movie} />
		</section>
	)
}