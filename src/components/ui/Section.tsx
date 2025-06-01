"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"

import { IMovie } from "@/types/movie.interface"

type Props = {
	slidesPerView?: number
	title: string
	subtitle?: string
	bgTitle?: string
	movies: IMovie[]
	children: React.ReactNode
}

export const Section = ({
	slidesPerView = 6,
	title,
	movies,
	subtitle,
	bgTitle,
	children
}: Props) => {
	return (
		<section className='container mt-32'>
			{/* TOP */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='w-1 h-1 bg-main-yellow rounded-full' />
					<h4 className='text-2xl text-text-primary'>{title}</h4>
				</div>
				<div className='flex items-center gap-1'>
					<button className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50'>
						<ChevronLeft
							color='var(--dark-text-primary)'
							size={16}
						/>
					</button>
					<button className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50'>
						<ChevronRight
							color='var(--dark-text-primary)'
							size={16}
						/>
					</button>
				</div>
			</div>

			{/* LIST */}
			<Swiper className="mt-8" slidesPerView={slidesPerView} spaceBetween={24}>
				{movies.map(movie => (
					<SwiperSlide key={movie.ids.imdb}>movie</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
