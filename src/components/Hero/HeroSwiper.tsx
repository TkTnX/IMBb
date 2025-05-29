"use client"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { useHeroStore } from "@/stores/heroStore"

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
		<div className='relative overflow-hidden pb-40 max-w-[1040px] flex-1'>
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
				className='flex-1  !overflow-visible'
				autoplay={{
					delay: 4000,
					disableOnInteraction: false
				}}
				onSlideChange={e =>
					setCurrentMovieIndex(e.activeIndex.toString())
				}
			>
				{/* TODO: Выводить из БД */}
				<SwiperSlide>
					<div className='relative w-full h-[500px] xl:h-[630px] '>
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
					<div className='flex items-end gap-8 absolute -bottom-[100px] left-5'>
						<div className='relative min-w-[200px] min-h-[300px] 2xl:min-w-[280px] 2xl:min-h-[400px]'>
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
						<div className='flex items-center gap-6 max-w-[585px]'>
							<button className='rounded-full bg-background-light-transparent-100 min-w-[80px] xl:min-w-[143px] min-h-[80px] xl:min-h-[143px] flex items-center justify-center hover:scale-90'>
								<Play
									size={90}
									className='fill-text-primary w-10 xl:w-[90px] h-10 xl:h-[90px]'
								/>
							</button>
							<div>
								<h2 className='text-2xl xl:text-4xl text-white'>
									‘Inside Out 2’ Make us Feel Every Emotion
								</h2>
								<p className='mt-3 text-xl xl:text-2xl text-background-transparent-600'>
									Watch the new “Inside out” Trailer
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative w-full h-[500px] xl:h-[630px] '>
						<Image
							className='rounded-xl'
							src={"/images/temp-images/hero2.jpg"}
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
					<div className='flex items-end gap-8 absolute -bottom-[100px] left-5'>
						<div className='relative min-w-[200px] min-h-[300px] 2xl:min-w-[280px] 2xl:min-h-[400px]'>
							<Image
								src={"/images/temp-images/hero-poster2.jpg"}
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
						<div className='flex items-center gap-6 max-w-[585px]'>
							<button className='rounded-full bg-background-light-transparent-100 min-w-[80px] xl:min-w-[143px] min-h-[80px] xl:min-h-[143px] flex items-center justify-center hover:scale-90'>
								<Play
									size={90}
									className='fill-text-primary w-10 xl:w-[90px] h-10 xl:h-[90px]'
								/>
							</button>
							<div>
								<h2 className='text-2xl xl:text-4xl text-white'>
									Welcome to the Apocalypse!
								</h2>
								<p className='mt-3 text-xl xl:text-2xl text-background-transparent-600'>
									Watch the new “Fallout” Trailer
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
	)
}
