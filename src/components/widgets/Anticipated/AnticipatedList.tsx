"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import { MovieItem } from "@/components/ui/MovieItem"

import { MOVIES_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { IMovie } from "@/types/movie.interface"
import { useSwiperStore } from "@/stores/swiperStore"

type Props = {
	list: IMovie[]
}

export const AnticipatedList = ({ list }: Props) => {
	const {setSwiperRefs} = useSwiperStore()
	return (
		<Swiper
			className='mt-8'
			slidesPerView={1}
			spaceBetween={12}
			breakpoints={MOVIES_BREAKPOINTS}
			onSwiper={swiper => setSwiperRefs("anticipated", swiper)}
		>
			{list?.map(movie => (
				<SwiperSlide key={movie.ids.imdb}>
					<MovieItem movie={movie} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
