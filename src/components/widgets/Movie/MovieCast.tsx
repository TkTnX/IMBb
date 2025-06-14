"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { CastSheet } from "@/components/modals"
import { SectionTitle } from "@/components/ui/SectionTitle"

import { CAST_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { useCastStore } from "@/stores/castStore"
import { useSwiperStore } from "@/stores/swiperStore"

type Props = {
	movieInfo: { title: string; year: number }
}

export const MovieCast = ({ movieInfo }: Props) => {
	const { setSwiperRefs } = useSwiperStore()
	const { cast } = useCastStore()

	if (!cast) return null
	return (
		<section id='Cast' className='mt-2 sm:mt-4 lg:mt-7 xl:mt-14'>
			<div className='flex flex-col vsm:flex-row gap-2 vsm:items-center justify-between'>
				<SectionTitle title='Cast'>
					<CastSheet cast={cast} movieInfo={movieInfo}>
						See all <ChevronRight size={12} />
					</CastSheet>
				</SectionTitle>
			</div>
			<Swiper
				onSwiper={swiper =>
					setSwiperRefs(`cast-${cast.cast[0].person.name}`, swiper)
				}
				className='mt-8 '
				slidesPerView={2}
				spaceBetween={15}
				breakpoints={CAST_BREAKPOINTS}
			>
				{cast.cast.map(person => (
					<SwiperSlide key={person.person.ids.slug}>
						<Link
							className='block max-w-[180px]'
							href={`/person/${person.person.ids.slug}`}
						>
							<div className='relative max-w-[180px] h-[180px]'>
								<Image
									loading='lazy'
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
		</section>
	)
}
