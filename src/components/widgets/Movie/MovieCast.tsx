"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { CastSheet } from "@/components/modals"
import { Img } from "@/components/ui/Img"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Skeleton } from "@/components/ui/skeleton"

import { CAST_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { useCastStore } from "@/stores/castStore"
import { useSwiperStore } from "@/stores/swiperStore"

type Props = {
	movieInfo: { title: string; year: number }
}

export const MovieCast = ({ movieInfo }: Props) => {
	const { setSwiperRefs } = useSwiperStore()
	const { credits } = useCastStore()
	return (
		<section id='Cast' className='mt-2 sm:mt-4 lg:mt-7 xl:mt-14'>
			<div className='flex flex-col vsm:flex-row gap-2 vsm:items-center justify-between'>
				<SectionTitle title='Cast'>
					<CastSheet credits={credits!} movieInfo={movieInfo}>
						See all <ChevronRight size={12} />
					</CastSheet>
				</SectionTitle>
			</div>
			<Swiper
				onSwiper={swiper => setSwiperRefs(`cast-list`, swiper)}
				className='mt-8 '
				slidesPerView={2}
				spaceBetween={15}
				breakpoints={CAST_BREAKPOINTS}
			>
				{credits
					? credits.cast.map(person => (
							<SwiperSlide key={person.id}>
								<Link
									className='block max-w-[180px]'
									href={`/person/${person.id}`}
								>
									<div className='relative max-w-[180px] h-[180px]'>
										<Img
											loading='lazy'
											src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w185${person.profile_path}`}
											className='  object-cover rounded-2xl'
											alt={person.name}
											fill
										/>
									</div>
									<h6 className='text-white mt-3'>
										{person.name}
									</h6>
									<p>{person.character}</p>
								</Link>
							</SwiperSlide>
						))
					: [...new Array(7)].map((_, index) => (
							<SwiperSlide key={index}>
								<Skeleton className='w-full h-[180px] bg-background-light-transparent-50' />
							</SwiperSlide>
						))}
			</Swiper>
		</section>
	)
}
