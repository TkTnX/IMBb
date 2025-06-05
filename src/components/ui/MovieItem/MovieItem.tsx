import { Star } from "lucide-react"
import Image from "next/image"

import { MovieButton } from "./MovieButton"
import { MovieMoreInfo } from "./MovieMoreInfo"
import { IMovie } from "@/types/movie.interface"
import Link from "next/link"

type Props = {
	movie: IMovie
}

export const MovieItem = ({ movie }: Props) => {
	return (
		<div className='p-3 rounded-lg bg-background-light-transparent-50'>
			<div className='relative w-full h-[250px] md:h-[300px]'>
				<Link href={`/movies/${movie.ids.slug}`}>
				<Image
					loading="lazy"
					
					className='rounded-sm'
					src={`https://${movie.images.poster[0]}`}
					alt={movie.title}
					fill
				/></Link>
				<button className='absolute top-0 left-5 hover:opacity-80'>
					<Image
						width={39}
						height={50}
						src={"/images/icons/bookmark-plus.svg"}
						alt='add to wishlist'
					/>
				</button>
			</div>

			<h5 className='mt-4 text-text-primary text-xl one-line'>
				{movie.title}
			</h5>
			<div className='flex items-center justify-between mt-4'>
				<div className='flex items-center gap-1'>
					<Star
						fill='var(--color-main-yellow)'
						color='var(--color-main-yellow)'
					/>
					<p className='text-lg '>{movie.rating.toFixed(1)}</p>
				</div>

				<MovieMoreInfo movie={movie} />
			</div>
			<MovieButton movie={movie} />
		</div>
	)
}
