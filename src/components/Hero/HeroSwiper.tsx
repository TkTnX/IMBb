"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { HeroSwiperItem } from "./HeroSwiperItem"
import { useHeroStore } from "@/stores/heroStore"
import { IMovieList } from "@/types/movie.interface"

type Props = {
	items: IMovieList[]
}

export const HeroSwiper = ({ items }: Props) => {
	const [bgColor, setBgColor] = useState<string>("")
	const swiperRef = useRef<SwiperType>(null)
	const paginationRef = useRef<HTMLDivElement>(null)
	const { setCurrentMovieIndex, currentMovieIndex } = useHeroStore()
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

	const onSlideChange = async () => {
		const res = await fetch(
			`/api/colors?image=https://${items[Number(currentMovieIndex) || 0].movie.images.poster[0]}`
		)
		const data = await res.json()
		console.log(data)
		setBgColor(data.color)
	}

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
					onSlideChange={e => {
						setCurrentMovieIndex(e.activeIndex.toString())
						onSlideChange()
					}}
				>
					{items.map(({ movie }) => (
						<SwiperSlide key={movie.ids.imdb}>
							<HeroSwiperItem movie={movie} />
						</SwiperSlide>
					))}

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
			<div
				style={{ backgroundColor: bgColor }}
				className={`blur-[500px]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[962px] -z-10 opacity-60`}
			/>
		</div>
	)
}
