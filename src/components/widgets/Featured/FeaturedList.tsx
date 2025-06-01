"use client"

import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { ListItem } from "@/components/ui/ListItem"

import { useSwiperStore } from "@/stores/swiperStore"
import { IListObj } from "@/types/list.interface"

type Props = {
	list: IListObj[]
}

export const FeaturedList = ({ list }: Props) => {
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
			{list.map(({ list }) => (
				<SwiperSlide key={list.ids.trakt}>
					<ListItem listItem={list} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
