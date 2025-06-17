import { Info, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AddToWishlistButton } from "../features"

import { Img } from "./Img"
import { ITmdbMovie } from "@/types/movie.interface"

type Props = {
	movie: ITmdbMovie
}

export const BigMovieItem = ({ movie }: Props) => {
	return (
		<div className='rounded-xl p-5 bg-background-light-transparent-50 flex flex-col vsm:flex-row sm:flex-col md:flex-row items-start gap-5 relative w-full'>
			<div className='min-w-[126px] min-h-[194px] relative '>
				<Img
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}${movie.poster_path}`}
					alt={movie.title}
					fill
					className='rounded-md'
				/>
				<AddToWishlistButton className='left-3' />
			</div>

			<div className='flex flex-col gap-3.5'>
				<h3 className='font-bold text-lg'>{movie.title}</h3>
				<p className='text-text-secondary'>
					{new Date(movie.release_date).getFullYear()}
				</p>

				<p>
					<span className='font-bold'>Votes: </span>
					{movie.vote_count}
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
					<p>{movie.vote_average.toFixed(1)}</p>
				</div>
				<button className='flex items-center gap-2 hover:opacity-80'>
					<Star size={18} />
					<p>Rate</p>
				</button>
				<Link href={`/movies/${movie.id}`} className='hover:opacity-80'>
					<Info size={18} />
				</Link>
			</div>
		</div>
	)
}
