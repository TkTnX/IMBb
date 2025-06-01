"use client"

import { Info, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { getAvailableImages } from "@/helpers/getAvailableImages"
import { cn } from "@/lib/utils"
import { useHeroStore } from "@/stores/heroStore"
import { IMovie } from "@/types/movie.interface"

type Props = { movie: IMovie; index: string }

export const HeroFeaturedItem = ({ movie, index }: Props) => {
	const currentMovieIndex = useHeroStore(state => state.currentMovieIndex)

	return (
		<div className='relative rounded-2xl min-w-[300px] lg:min-w-auto lg:h-[180px] bg-cover bg-center  px-3.5 py-5 flex flex-col lg:flex-row items-stretch gap-3.5 overflow-hidden'>
			<div
				className={cn(
					"absolute inset-0 bg-cover bg-center -z-[1] brightness-[30%]",
					index === currentMovieIndex && "brightness-60"
				)}
				style={{
					backgroundImage: `url(https://${getAvailableImages(movie)[0]})`
				}}
			/>
			<Image
				src={`https://${movie.images.poster[0]}`}
				alt='poster'
				width={93}
				height={140}
				className='rounded-md md:w-unset max-h-[140px] h-full lg:w-[93px] object-cover lg:h-[140px]'
			/>
			<div className='flex flex-col  items-end flex-1'>
				<div className=' w-full flex-1'>
					<h5 className='text-2xl lg:text-lg text-text-primary'>
						{movie.title}
					</h5>
					<p className='mt-1.5 text-text-primary text-xl lg:text-sm'>
						{movie.trailer ? (
							<a className='inline' href={movie.trailer}>
								Watch the new {movie.title} Trailer
							</a>
						) : (
							<Link href={`/movies/${movie.ids.slug}`}>
								Read more about {movie.title}
							</Link>
						)}
					</p>
				</div>
				<div className='flex items-center gap-3 flex-1'>
					{movie.trailer ? (
						<a
							href={movie.trailer}
							className='bg-background-light-transparent-100 rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110'
						>
							<Play className='fill-text-primary' size={31} />
						</a>
					) : (
						<Link
							className='bg-background-light-transparent-100 rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110'
							href={`/movies/${movie.ids.slug}`}
						>
							<Info size={31} />
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
