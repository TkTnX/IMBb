"use client"

import Image from "next/image"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Section } from "@/components/ui/Section"

import { useSwiperStore } from "@/stores/swiperStore"

export const MoviePhotos = ({ photos }: { photos: string[] }) => {
	const { setSwiperRefs } = useSwiperStore()
	return (
		<Section
			className='mt-14 sm:mt-14 lg:mt-14 xl:mt-14'
			title='Photos'
			section={`photos-${photos[0]}`}
		>
			<Swiper
				onSwiper={swiper =>
					setSwiperRefs(`photos-${photos[0]}`, swiper)
				}
				className='mt-8 '
				slidesPerView={4.5}
				spaceBetween={15}
			>
				{photos.map((photo, index) => (
					<SwiperSlide key={index}>
						<div className='relative w-full h-[300px] bg-background-light-transparent-50 rounded-2xl'>
							<Image
								className='object-contain'
								src={`https://${photo}`}
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
