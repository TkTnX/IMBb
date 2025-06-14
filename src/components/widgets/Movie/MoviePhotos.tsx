"use client"

import Image from "next/image"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Section } from "@/components/ui/Section"

import { useSwiperStore } from "@/stores/swiperStore"
import { PHOTOS_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"

export const MoviePhotos = ({ photos }: { photos: string[] }) => {
	const { setSwiperRefs } = useSwiperStore()
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
							<Image
								className='object-contain'
								src={`https://${photo}`}
								onError={e => (e.currentTarget.src = "/images/no-poster.jpg")}
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
