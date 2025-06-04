import { Calendar, Play } from "lucide-react"
import Image from "next/image"

import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const TrailerItem = ({ movie }: Props) => {
	return (
		<a
			href={movie.trailer}
			className='rounded-lg p-3 bg-gradient-to-b from-[rgba(61,61,61,0.05)] to-[rgba(163,163,163,0.05)] hover:to-[rgba(163,163,163,0.21)]'
		>
			<div className='relative w-full h-[300px] vsm:h-[150px] sm:h-[200px] lg:h-[300px]'>
				<Image
					loading='lazy'
					src={`https://${movie.images.poster[0]}`}
					alt={movie.title}
					fill
					className='rounded-sm object-cover sm:object-fill lg:object-cover'
				/>
				<button className='flex items-center justify-center text-text-primary gap-2 absolute bottom-5 left-4 rounded-[45px] w-8 md:w-auto md:py-2 md:h-auto h-8 md:px-4 bg-background-secondary'>
					<Play
						className='w-5 h-5 '
						fill='var(--dark-text-primary)'
					/>
					<span className='hidden md:block'>Watch</span>
				</button>
			</div>
			<div className='flex items-center gap-1 mt-2'>
				<Calendar color='var(--dark-text-secondary)' />
				<p className='text-text-secondary'>
					{new Date(movie.released).toLocaleString("en", {
						month: "long",
						day: "numeric",
						year: 'numeric'
					})}
				</p>
			</div>
			<p className='mt-1 text-text-primary'>{movie.title}</p>
		</a>
	)
}
