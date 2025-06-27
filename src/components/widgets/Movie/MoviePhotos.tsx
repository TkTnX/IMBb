"use client"

import { ChevronRight } from "lucide-react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { ImagesSheet } from "@/components/modals"
import { Img } from "@/components/ui/Img"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Skeleton } from "@/components/ui/skeleton"

import { useImages } from "@/hooks/useImages"

import { PHOTOS_BREAKPOINTS } from "@/configs/swiper-breakpoints.config"
import { useSwiperStore } from "@/stores/swiperStore"

export const MoviePhotos = ({ id }: { id: number }) => {
	const { setSwiperRefs } = useSwiperStore()
	const { images, loading, error } = useImages(id)

	return (
		<section id='Photos' className='mt-2 sm:mt-4 lg:mt-7 xl:mt-14 '>
			<SectionTitle title='Photos'>
				<ImagesSheet images={images}>
					<button className='rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-lg flex items-center gap-2.5 hover:opacity-80 w-fit'>
						See all <ChevronRight size={12} />
					</button>
				</ImagesSheet>
			</SectionTitle>
			{error ? (
				<p className='text-red-500 text-center'>{error}</p>
			) : (
				<Swiper
					onSwiper={swiper => setSwiperRefs(`photos`, swiper)}
					className='mt-8 '
					slidesPerView={1.5}
					spaceBetween={15}
					breakpoints={PHOTOS_BREAKPOINTS}
				>
					{loading || (!images && !error)
						? [...new Array(10)].map((_, index) => (
								<SwiperSlide key={index}>
									<Skeleton className='w-full h-[300px]' />
								</SwiperSlide>
							))
						: images &&
							images.posters.slice(0, 10).map((photo, index) => (
								<SwiperSlide key={index}>
									<div className='relative w-full h-[300px] bg-background-light-transparent-50 rounded-2xl'>
										<Img
											className='object-contain'
											src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w154${photo.file_path}`}
											alt={photo.file_path}
											fill
										/>
									</div>
								</SwiperSlide>
							))}
				</Swiper>
			)}
		</section>
	)
}
