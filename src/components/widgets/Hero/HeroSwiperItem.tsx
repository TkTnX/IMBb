import { Info, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { getAvailableImages } from "@/helpers/getAvailableImages"
import { IMovie } from "@/types/movie.interface"
import { AddToWishlistButton } from "@/components/features"

type Props = {
	movie: IMovie
}

export const HeroSwiperItem = ({ movie }: Props) => {
	return (
		<>
			<div className='relative w-full h-[400px] sm:h-[500px] xl:h-[630px] '>
				<Image
					loading='lazy'
					className='rounded-xl object-cover'
					src={`https://${getAvailableImages(movie)[0]}`}
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
					<Image
						loading='lazy'
						src={`https://${movie.images.poster[0]}`}
						alt={movie.title}
						fill
						className='rounded-xl'
					/>
					
					<AddToWishlistButton className="left-5" />
				</div>
				{movie.trailer ? (
					<a
						href={movie.trailer}
						className='flex flex-col vsm:flex-row items-start vsm:items-center gap-2 xl:gap-6 xl:max-w-[585px] relative z-90'
					>
						<button className='rounded-full bg-background-light-transparent-100 min-w-10 vsm:min-w-[80px] xl:min-w-[143px] min-h-10 vsm:min-h-[80px] xl:min-h-[143px] flex items-center justify-center hover:scale-90'>
							<Play
								size={90}
								className='fill-text-primary w-5 vsm:w-10 xl:w-[90px] h-5 vsm:h-10 xl:h-[90px]'
							/>
						</button>
						<div>
							<h2 className='text-2xl xl:text-4xl text-white'>
								{movie.title}
							</h2>
							<p className='mt-3 text-xl xl:text-2xl text-background-transparent-600'>
								Watch the new “{movie.title}” Trailer
							</p>
						</div>
					</a>
				) : (
					<Link
						className='flex flex-col vsm:flex-row items-start vsm:items-center gap-2 xl:gap-6 xl:max-w-[585px] relative z-90'
						href={`/movies/${movie.ids.slug}`}
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
				)}
			</div>
		</>
	)
}
