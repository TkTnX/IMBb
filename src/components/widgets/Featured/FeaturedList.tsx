"use client"

import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { ListItem } from "@/components/ui/ListItem"

import { useSwiperStore } from "@/stores/swiperStore"
import { IMovie } from "@/types/movie.interface"

type Props = {
	list: IMovie[]
}

export const FeaturedList = ({ list }: Props) => {
	const { setSwiperRefs } = useSwiperStore()

	return (
		<Swiper
			onSwiper={swiper => setSwiperRefs("featured", swiper)}
			className='mt-8'
			slidesPerView={1}
			spaceBetween={12}
			breakpoints={{
				1024: {
					slidesPerView: 4
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 24
				},
				640: {
					slidesPerView: 2
				}
			}}
		>
			{list.map(movie => (
				<SwiperSlide key={movie.ids.slug}>
					<ListItem movie={movie} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
