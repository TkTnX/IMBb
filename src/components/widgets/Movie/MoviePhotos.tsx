"use client"

import Image from "next/image"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Section } from "@/components/ui/Section"

import { useSwiperStore } from "@/stores/swiperStore"

export const MoviePhotos = ({ photos }: { photos: string[] }) => {
	const { setSwiperRefs } = useSwiperStore()
// TODO: Доделать слайдер (щас проблемы с адаптивом)
	return (
        <Section title='Photos' section='photos'>
            <div></div>
			{/* <Swiper
				onSwiper={swiper => setSwiperRefs("actors", swiper)}
				className='mt-8 h-[300px]'
				slidesPerView={3}
				spaceBetween={15}
			>
				{photos.map(photo => (
					<SwiperSlide key={photo} className='relative w-full h-full'>
						<Image
							className='object-contain border border-background-light-transparent-100 rounded-2xl'
							src={`https://${photo}`}
							alt='photo'
							fill
						/>
					</SwiperSlide>
				))}
			</Swiper> */}
		</Section>
	)
}
