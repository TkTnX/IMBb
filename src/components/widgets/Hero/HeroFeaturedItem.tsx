"use client"

import { Img } from "@/components/ui/Img"

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
					"absolute inset-0 bg-cover bg-center -z-[1] brightness-[30%] ",
					index === currentMovieIndex && "brightness-60"
				)}
				style={{
					backgroundImage: `url(https://${getAvailableImages(movie)[0]})`
				}}
			/>
			<Img
				src={movie.images.poster[0]}
				alt={movie.title}
				width={93}
				height={140}
				className='rounded-md md:w-unset max-h-[140px] h-full lg:w-[93px] object-cover lg:h-[140px]'
			/>

			<div className='flex flex-col  items-end flex-1'>
				<div className=' w-full flex-1'>
					<h5 className='text-2xl lg:text-lg text-text-primary'>
						{movie.title}
					</h5>
				</div>
			</div>
		</div>
	)
}
