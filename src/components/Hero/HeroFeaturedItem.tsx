"use client"

import { Play } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { useHeroStore } from "@/stores/heroStore"

export const HeroFeaturedItem = ({ index }: { index: string }) => {
	const currentMovieIndex = useHeroStore(state => state.currentMovieIndex)
	return (
		<div className='relative rounded-2xl min-w-[300px] lg:min-w-auto lg:h-[180px] bg-cover bg-center  px-3.5 py-5 flex flex-col lg:flex-row items-stretch gap-3.5 overflow-hidden'>
			<div
				className={cn(
					"absolute inset-0 bg-cover bg-center -z-[1] brightness-[30%]",
					index === currentMovieIndex && "brightness-60"
				)}
				style={{
					backgroundImage:
						"url('/images/temp-images/hero-featured1.jpg')"
				}}
			/>
			<Image
				src={"/images/temp-images/hero-poster1.jpg"}
				alt='poster'
				width={93}
				height={140}
				className='rounded-md md:w-full max-h-[140px] md:max-h-full lg:w-[93px] object-cover lg:h-[140px]'
			/>
			<div className='flex flex-col  items-end flex-1'>
				<div>
					<h5 className='text-2xl lg:text-lg text-text-primary'>
						‘Inside Out 2’ Make us Feel Every Emotion
					</h5>
					<p className='mt-1.5 text-text-primary text-xl lg:text-sm'>
						Watch the new “Inside Out 2” Trailer
					</p>
				</div>
				<div className='flex items-center gap-3 flex-1'>
					<p className='text-text-secondary'>3:18</p>
					<button className='bg-background-light-transparent-100 rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110'>
						<Play className='fill-text-primary' size={31} />
					</button>
				</div>
			</div>
		</div>
	)
}
