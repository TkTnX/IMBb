"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import { MovieItem } from "@/components/ui/MovieItem"

import { MOVIES_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { useSwiperStore } from "@/stores/swiperStore"
import { IMovie } from "@/types/movie.interface"

type Props = {
	list: IMovie[]
}

// TODO: Фикс кнопок слайдера

export const TopImdbList = ({ list }: Props) => {
	const { setSwiper, setDisabledNumber } = useSwiperStore()
	return (
		<Swiper
			onSwiper={swiper => setSwiper(swiper)}
			className='mt-8'
			slidesPerView={1}
			spaceBetween={12}
			onSlideChange={e => {
				setDisabledNumber(
					e.isEnd ? "next" : e.isBeginning ? "prev" : null
				)
			}}
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
