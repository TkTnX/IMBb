"use client"

import { useEffect, useRef } from "react"
import type { Swiper as swiperType } from "swiper"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { ListItem } from "@/components/ui/ListItem"

import { useSwiperStore } from "@/stores/swiperStore"
import { IListObj } from "@/types/list.interface"

type Props = {
	list: IListObj[]
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
			{list.map(({ list }) => (
				<SwiperSlide key={list.ids.trakt}>
					<ListItem listItem={list} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
