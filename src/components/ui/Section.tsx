"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

import { useSwiperStore } from "@/stores/swiperStore"

type Props = {
	title: string
	subtitle?: string
	bgTitle?: string
	children: React.ReactNode
}

export const Section = ({ title, subtitle, bgTitle, children }: Props) => {
	const { swiper, disabledButton } = useSwiperStore()
	return (
		<section className='container mt-32'>
			{/* TOP */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='w-1 h-1 bg-main-yellow rounded-full' />
					<h4 className='text-2xl text-text-primary'>{title}</h4>
				</div>
				<div className='flex items-center gap-1'>
					<button
						onClick={() => swiper?.slidePrev()}
						disabled={disabledButton === "prev"}
						className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'
					>
						<ChevronLeft
							color='var(--dark-text-primary)'
							size={16}
						/>
					</button>
					<button
						onClick={() => swiper?.slideNext()}
						disabled={disabledButton === "next"}
						className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'
					>
						<ChevronRight
							color='var(--dark-text-primary)'
							size={16}
						/>
					</button>
				</div>
			</div>

			{/* LIST */}
			{children}
		</section>
	)
}
