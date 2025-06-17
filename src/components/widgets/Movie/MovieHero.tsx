"use client"

import { useEffect, useRef, useState } from "react"

import { Img } from "@/components/ui/Img"

import { getAvailableImages } from "@/helpers/getAvailableImages"
import { getColor } from "@/helpers/getAverageColor"
import { ITmdbMovieDetailed } from "@/types/movie.interface"

export const MovieHero = ({ movie }: { movie: ITmdbMovieDetailed }) => {
	const [bgColor, setBgColor] = useState<string>("#000")
	const imageRef = useRef<HTMLImageElement>(null)
	useEffect(() => {
		async function getAsyncColor() {
			await getColor({
				itemRef: imageRef.current!,
				setBgColor
			})
		}
		getAsyncColor()
	}, [])

	return (
		<div className='w-full  h-[490px] vsm:h-[300px] sm:h-[490px] flex-col-reverse md:flex-row flex items-center vsm:items-start lg:items-start gap-6 mt-5'>
			<div className='block vsm:hidden lg:block relative w-full max-w-[340px] h-full  rounded overflow-hidden'>
				<Img
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w342${movie.poster_path}`}
					alt={movie.title}
					fill
				/>
			</div>
			<div
				ref={imageRef}
				className='hidden vsm:block lg:flex-1 w-full lg:w-auto h-full relative rounded overflow-hidden'
			>
				<Img
					fill
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w780${movie.backdrop_path}`}
					alt={movie.title}
					className='object-contain lg:object-cover'
				/>
			</div>
			<div
				style={{ backgroundColor: bgColor }}
				className={`blur-[500px]  absolute left-1/2 top-0 -translate-x-1/2  w-full h-[962px] -z-10 opacity-60`}
			/>
		</div>
	)
}
