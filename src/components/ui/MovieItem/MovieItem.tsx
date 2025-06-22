import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AddToWishlistButton } from "@/components/features"

import { Img } from "../Img"

import { MovieButton } from "./MovieButton"
import { MovieMoreInfo } from "./MovieMoreInfo"
import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const MovieItem = ({ movie }: Props) => {
	return (
		<div className='p-3 rounded-lg bg-background-light-transparent-50'>
			<div className='relative w-full h-[250px] md:h-[300px]'>
				<Link href={`/search?q=${movie.title}`}>
					<Img
						className='rounded-sm object-cover'
						src={`${movie.images.poster[0]}`}
						alt={movie.title}
						fill
					/>
				</Link>

				<AddToWishlistButton className='left-5' />
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
