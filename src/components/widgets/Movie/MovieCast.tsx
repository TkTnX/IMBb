"use client"

import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Section } from "@/components/ui/Section"

import { useSwiperStore } from "@/stores/swiperStore"
import { IMoviePeopleDetails } from "@/types/movie.interface"

export const MovieCast = ({ cast }: { cast: IMoviePeopleDetails }) => {
	const { setSwiperRefs } = useSwiperStore()
	return (
		<Section
			className='mt-14 sm:mt-14 lg:mt-14 xl:mt-14'
			title='Cast'
			section={`cast-${cast.cast[0].person.name}`}
		>
			<Swiper
				onSwiper={swiper =>
					setSwiperRefs(`cast-${cast.cast[0].person.name}`, swiper)
				}
				className='mt-8 '
				slidesPerView={6}
				spaceBetween={15}
			>
				{cast.cast.map(person => (
					<SwiperSlide key={person.person.ids.slug}>
						<Link
							className='block max-w-[180px]'
							href={`/person/${person.person.ids.slug}`}
						>
							<div className='relative max-w-[180px] h-[180px]'>
								<Image
									loading="lazy"
									src={`https://${person.images.headshot[0]}`}
									className='  object-cover rounded-2xl'
									alt={person.person.name}
									fill
								/>
							</div>
							<h6 className='text-white mt-3'>
								{person.person.name}
							</h6>
							<p>{person.character}</p>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	)
}
