import { Info, Play } from "lucide-react"
import Link from "next/link"

import { IMovie } from "@/types/movie.interface"

export const MovieButton = ({ movie }: { movie: IMovie }) => {
	return (
		<div className='mt-4'>
			{movie.trailer ? (
				<a
					className='flex items-center rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-inner justify-center hover:bg-background-light-transparent-50 gap-4'
					href={movie.trailer}
				>
					<Play fill='var(--color-text-primary)' size={16} />
					Trailer
				</a>
			) : (
				<Link
					className='flex items-center rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-inner justify-center hover:bg-background-light-transparent-50 gap-4'
					href={`/movies/${movie.ids.slug}`}
				>
					<Info />
					See more
				</Link>
			)}
		</div>
	)
}
