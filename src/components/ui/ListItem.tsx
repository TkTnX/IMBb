import { Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const ListItem = ({ movie }: Props) => {
	return (
		<div className='flex-1'>
			<div className='relative w-full h-[200px]'>
				<Image
					loading='lazy'
					className='object-cover rounded-sm brightness-50'
					src={`https://${movie.images.poster[0]}`}
					fill
					alt={movie.title}
				/>
				<Link
					className='text-text-primary flex items-center justify-center gap-2 rounded-[45px] w-10 h-10 bg-background-transparent-600 hover:bg-background-light-transparent-100 absolute left-3.5 bottom-5 '
					href={`/movies/${movie.ids.tmdb}`}
				>
					<Info />
				</Link>
			</div>
			<h6 className='mt-2 text-text-primary'>{movie.title}</h6>
		</div>
	)
}
