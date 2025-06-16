"use client"

import Image from "next/image"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Img } from "@/components/ui/Img"
import { Section } from "@/components/ui/Section"

import { PHOTOS_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { useSwiperStore } from "@/stores/swiperStore"

export const MoviePhotos = ({ photos }: { photos: string[] }) => {
	const { setSwiperRefs } = useSwiperStore()
	if(!photos.length) return null
	return (
		<Section
			id='Photos'
			className='mt-2 sm:mt-4 lg:mt-7 xl:mt-14 '
			title='Photos'
			section={`photos-${photos[0]}`}
		>
			<Swiper
				onSwiper={swiper =>
					setSwiperRefs(`photos-${photos[0]}`, swiper)
				}
				className='mt-8 '
				slidesPerView={1.5}
				spaceBetween={15}
				breakpoints={PHOTOS_BREAKPOINTS}
			>
				{photos.map((photo, index) => (
					<SwiperSlide key={index}>
						<div className='relative w-full h-[300px] bg-background-light-transparent-50 rounded-2xl'>
							<Img
								className='object-contain'
								src={photo}
								alt={photo}
								fill
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	)
}
