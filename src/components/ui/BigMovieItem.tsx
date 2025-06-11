import { Info, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AddToWishlistButton } from "../features"

import { MovieMeta } from "./MovieMeta"
import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const BigMovieItem = ({ movie }: Props) => {
	return (
		<div className='rounded-xl p-5 bg-background-light-transparent-50 flex flex-col vsm:flex-row sm:flex-col md:flex-row items-start gap-5 relative w-full'>
			<div className='min-w-[126px] min-h-[194px] relative '>
				<Image
					src={`https://${movie.images.poster[0]}`}
					alt={movie.title}
					fill
					className='rounded-md'
				/>
				<AddToWishlistButton className='left-3' />
			</div>
			<div className='flex flex-col gap-3.5'>
				<h3 className='font-bold text-lg'>{movie.title}</h3>
				<MovieMeta movie={movie} />
				<div className='flex items-center gap-2.5 flex-wrap'>
					{movie.genres.map(genre => (
						<div
							key={genre}
							className='rounded-[45px] py-2 px-5 bg-background-light-transparent-100'
						>
							{genre[0].toUpperCase() + genre.slice(1)}
						</div>
					))}
				</div>
				<p>{movie.tagline}</p>
				<p>
					<span className='font-bold'>Votes: </span>
					{movie.votes}
				</p>
				<p className='border-l-[6px] text-sm sm:text-base border-main-yellow rounded-lg p-2.5 pl-5 bg-[#f5c5180d] '>
					{movie.overview}
				</p>
			</div>
			<div className='flex items-center gap-2.5 vsm:absolute right-5  sm:top-4 top-4 vsm:top-auto sm:left-auto sm:bottom-auto sm:right-5'>
				<div className='flex items-center gap-2'>
					<Star
						fill='var(--color-main-yellow)'
						color='var(--color-main-yellow)'
						size={18}
					/>
					<p>{movie.rating.toFixed(1)}</p>
				</div>
				<button className='flex items-center gap-2 hover:opacity-80'>
					<Star size={18} />
					<p>Rate</p>
				</button>
				<Link
					href={`/movies/${movie.ids.slug}`}
					className='hover:opacity-80'
				>
					<Info size={18} />
				</Link>
			</div>
		</div>
	)
}
