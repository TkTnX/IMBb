"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import { ActorItem } from "@/components/ui/ActorItem"

import { IActor } from "@/types/actor.interface"

type Props = {
	list: IActor[]
}

export const ActorsList = ({ list }: Props) => {
	return (
		<Swiper
			className='mt-8'
			slidesPerView={2}
			spaceBetween={15}
			breakpoints={{
				1400: {
					slidesPerView: 7
				},
				1200: {
					slidesPerView: 6
				},
				960: {
					slidesPerView: 5
				},
				580: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			}}
		>
			{list.map(actor => (
				<SwiperSlide key={actor.ids.slug}>
					<ActorItem actor={actor} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
