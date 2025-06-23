"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import { ActorItem } from "@/components/ui/ActorItem"

import { useSwiperStore } from "@/stores/swiperStore"
import {  ITmdbActor } from "@/types/actor.interface"
import { ACTORS_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"

type Props = {
	list: ITmdbActor[]
}

export const ActorsList = ({ list }: Props) => {
	const { setSwiperRefs } = useSwiperStore()


	
	return (
		<Swiper
			onSwiper={swiper => setSwiperRefs("actors", swiper)}
			className='mt-8'
			slidesPerView={2}
			spaceBetween={15}
			breakpoints={ACTORS_BREAKPOINTS}
		>
			{list.map(actor => (
				<SwiperSlide key={actor.id}>
					<ActorItem actor={actor} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
