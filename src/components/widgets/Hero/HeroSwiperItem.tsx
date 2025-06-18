import { Info, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AddToWishlistButton } from "@/components/features"
import { Img } from "@/components/ui/Img"

import { ITmdbMovie } from "@/types/movie.interface"

type Props = {
	movie: ITmdbMovie
}

export const HeroSwiperItem = ({ movie }: Props) => {
	return (
		<>
			<div className='relative w-full h-[400px] sm:h-[500px] xl:h-[630px] '>
				<Img
					className='rounded-xl object-cover'
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w780${movie.backdrop_path}`}
					fill
					alt={movie.title}
					style={{
						maskImage:
							"linear-gradient(to bottom, black 60%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, black 60%, transparent 100%)"
					}}
				/>
			</div>
			{/* MOVIE INFO */}
			<div className='flex flex-col sm:flex-row sm:items-end gap-4 lg:gap-8 absolute -bottom-[100px] left-5'>
				<div className='relative max-w-[130px] sm:min-w-[130px] lg:min-w-[200px] h-[200px] lg:min-h-[300px] 2xl:min-w-[280px] 2xl:min-h-[400px]'>
					<Img
						src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w185${movie.poster_path}`}
						alt={movie.title}
						fill
						className='rounded-xl'
					/>

					<AddToWishlistButton className='left-5' />
				</div>

				<Link
					className='flex flex-col vsm:flex-row items-start vsm:items-center gap-2 xl:gap-6 xl:max-w-[585px] relative z-90'
					href={`/movies/${movie.id}`}
				>
					<button className='rounded-full bg-background-light-transparent-100 min-w-10 vsm:min-w-[80px] xl:min-w-[143px] min-h-10 vsm:min-h-[80px] xl:min-h-[143px] flex items-center justify-center hover:scale-90'>
						<Info
							size={90}
							className=' w-5 vsm:w-10 xl:w-[90px] h-5 vsm:h-10 xl:h-[90px]'
						/>
					</button>
					<div>
						<h2 className='text-2xl xl:text-4xl text-white'>
							{movie.title}
						</h2>
						<p className='mt-3 text-xl xl:text-2xl text-background-transparent-600'>
							Read more about “{movie.title}”
						</p>
					</div>
				</Link>
			</div>
		</>
	)
}
