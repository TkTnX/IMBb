import { Calendar, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AddToWatchlistButton } from "../features"

import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const TrailerItem = ({ movie }: Props) => {
	return (
		<div className='flex flex-col justify-between h-full rounded-lg p-3 bg-gradient-to-b from-[rgba(61,61,61,0.05)] to-[rgba(163,163,163,0.05)] hover:to-[rgba(163,163,163,0.21)] relative'>
			<a href={movie.trailer} className='absolute inset-0 z-10' />
			<div>
				<div className='relative w-full h-[300px] vsm:h-[150px] sm:h-[200px] lg:h-[300px]'>
					<Image
						loading='lazy'
						src={`https://${movie.images.poster[0]}`}
						alt={movie.title}
						fill
						className='rounded-sm object-cover sm:object-fill lg:object-cover'
					/>
					<AddToWatchlistButton movieId={movie.ids.tmdb} className='left-5' />
					<button className='flex items-center justify-center text-text-primary gap-2 absolute bottom-5 left-4 rounded-[45px] w-8 md:w-auto md:py-2 md:h-auto h-8 md:px-4 bg-background-secondary'>
						<Play
							className='w-5 h-5 '
							fill='var(--dark-text-primary)'
						/>
						<span className='hidden md:block'>Watch</span>
					</button>
				</div>
				<div className='flex-1'>
					<div className='flex items-center gap-1 mt-2'>
						<Calendar color='var(--dark-text-secondary)' />
						<p className='text-text-secondary'>
							{new Date(movie.released).toLocaleString("en", {
								month: "long",
								day: "numeric",
								year: "numeric"
							})}
						</p>
					</div>
					<p className='mt-1 text-text-primary'>{movie.title}</p>
				</div>
			</div>
			<Link
				href={`/movies/${movie.ids.tmdb}`}
				className='bg-main-yellow text-black py-2 px-4 rounded-lg hover:opacity-80 block text-center relative z-20 mt-10'
			>
				Read more
			</Link>
		</div>
	)
}
