"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import { MovieItem } from "@/components/ui/MovieItem"

import { MOVIES_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { IMovie } from "@/types/movie.interface"
import { useSwiperStore } from "@/stores/swiperStore"

type Props = {
	list: IMovie[]
}

export const TopPicksList = ({ list }: Props) => {
	const {setSwiperRefs} = useSwiperStore()
	return (
		<Swiper
			onSwiper={swiper => setSwiperRefs("top-picks", swiper)}
			className='mt-8'
			slidesPerView={1}
			spaceBetween={12}
			breakpoints={MOVIES_BREAKPOINTS}
		>
			{list.map(movie => (
				<SwiperSlide key={movie.ids.imdb}>
					<MovieItem movie={movie} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
