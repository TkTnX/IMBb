"use client"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { useHeroStore } from "@/stores/heroStore"

// TODO: Адаптив секции
// TODO: Получать данные из БД

export const HeroSwiper = () => {
	const swiperRef = useRef<SwiperType>(null)
	const paginationRef = useRef<HTMLDivElement>(null)
	const setCurrentMovieIndex = useHeroStore(
		state => state.setCurrentMovieIndex
	)
	useEffect(() => {
		if (
			swiperRef.current &&
			swiperRef.current.params &&
			paginationRef.current
		) {
			const pagination = swiperRef.current.params.pagination
			if (pagination && typeof pagination === "object") {
				pagination.el = paginationRef.current
				swiperRef.current.pagination.init()
				swiperRef.current.pagination.render()
				swiperRef.current.pagination.update()
			}
		}
	}, [])

	return (
		<div className='flex-1 overflow-x-hidden  w-full'>
			<div
				className={
					"relative lg:pb-40 w-full h-[500px] sm:h-[700px] lg:h-auto !max-w-[1040px] lg:flex-1 "
				}
			>
				<Swiper
					loop
					modules={[EffectFade, Autoplay, Pagination, Navigation]}
					onBeforeInit={swiper => {
						swiperRef.current = swiper
					}}
					pagination={{
						clickable: true,
						el: undefined
					}}
					effect='fade'
					fadeEffect={{ crossFade: true }}
					slidesPerView={1}
					className='lg:flex-1  !overflow-visible '
					autoplay={{
						delay: 4000,
						disableOnInteraction: false
					}}
					onSlideChange={e =>
						setCurrentMovieIndex(e.activeIndex.toString())
					}
				>
					{/* TODO: Выводить из БД */}
					<SwiperSlide className=' overflow-visible'>
						<div className='relative w-full h-[400px] sm:h-[500px] xl:h-[630px] '>
							<Image
								className='rounded-xl'
								src={"/images/temp-images/hero1.jpg"}
								fill
								alt='hero temp image'
								style={{
									maskImage:
										"linear-gradient(to bottom, black 60%, transparent 100%)",
									WebkitMaskImage:
										"linear-gradient(to bottom, black 60%, transparent 100%)"
								}}
							/>
						</div>
						{/* MOVIE INFO */}
						<div className='flex flex-col sm:flex-row sm:items-end gap-4 lg:gap-8 absolute -bottom-[100px] left-5'>
							<div className='relative max-w-[130px] sm:min-w-[130px] lg:min-w-[200px] h-[200px] lg:min-h-[300px] 2xl:min-w-[280px] 2xl:min-h-[400px]'>
								<Image
									src={"/images/temp-images/hero-poster1.jpg"}
									alt='hero-poster'
									fill
									className='rounded-xl'
								/>
								<button className='absolute left-5 top-0 hover:scale-105'>
									<Image
										src={"/images/icons/bookmark-plus.svg"}
										width={39}
										height={50}
										alt='add to favorites'
									/>
								</button>
							</div>
							<div className='flex flex-col vsm:flex-row items-start vsm:items-center gap-2 xl:gap-6 xl:max-w-[585px]'>
								<button className='rounded-full bg-background-light-transparent-100 min-w-10 vsm:min-w-[80px] xl:min-w-[143px] min-h-10 vsm:min-h-[80px] xl:min-h-[143px] flex items-center justify-center hover:scale-90'>
									<Play
										size={90}
										className='fill-text-primary w-5 vsm:w-10 xl:w-[90px] h-5 vsm:h-10 xl:h-[90px]'
									/>
								</button>
								<div>
									<h2 className='text-2xl xl:text-4xl text-white'>
										‘Inside Out 2’ Make us Feel Every
										Emotion
									</h2>
									<p className='mt-3 text-xl xl:text-2xl text-background-transparent-600'>
										Watch the new “Inside out” Trailer
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* PAGINATION */}
					<div className='flex items-center gap-7 absolute right-6 bottom-9 z-10'>
						<div
							ref={paginationRef}
							className='flex items-center gap-3'
						/>

						<div className='flex items-center gap-1.5'>
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className='w-10 h-10 rounded-full bg-background-light-transparent-50 flex items-center justify-center hover:opacity-80'
							>
								<ChevronLeft />
							</button>
							<button
								onClick={() => swiperRef.current?.slideNext()}
								className='w-10 h-10 rounded-full bg-background-light-transparent-100 flex items-center justify-center hover:opacity-80 '
							>
								<ChevronRight />
							</button>
						</div>
					</div>
				</Swiper>
			</div>
		</div>
	)
}
