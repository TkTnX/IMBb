import { Info, Star } from "lucide-react"
import Link from "next/link"

import { AddToWatchlistButton } from "../features"

import { Img } from "./Img"
import { ICastPerson } from "@/types/cast.interface"

type Props = {
	item: ICastPerson
}

export const KnownForItem = ({ item }: Props) => {
	return (
		<div className=' flex-1 relative flex items-stretch gap-4 bg-background-light-transparent-50 rounded-lg  overflow-hidden group mt-4'>
			<Link
				href={`/movies/${item.movie?.ids.tmdb}`}
				className='absolute inset-0 z-10'
			></Link>
			<div className='relative w-[70px] h-full '>
				<Img
					className='object-cover'
					alt={item.movie?.title!}
					fill
					src={item.movie?.images.poster[0]!}
				/>
				<AddToWatchlistButton movieId={item.movie.ids.tmdb} className='left-0' />
			</div>
			<div className='flex-1 p-2'>
				<h3 className='font-bold group-hover:opacity-80'>
					{item.movie?.title}
				</h3>
				<p className='flex items-center gap-1 text-sm'>
					<Star
						size={16}
						color='var(--color-main-yellow)'
						fill='var(--color-main-yellow)'
					/>
					<span>{item.movie?.rating.toFixed(1)}</span>
				</p>
				<p className='text-sm'>{item.character}</p>
				<div className='flex items-center justify-between w-full mt-1 '>
					<p className='text-sm'>{item.movie.year}</p>
					<button className='group-hover:opacity-80'>
						<Info color='var(--color-main-blue)' />
					</button>
				</div>
			</div>
		</div>
	)
}
