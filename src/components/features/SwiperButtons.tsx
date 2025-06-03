import { ChevronLeft, ChevronRight } from "lucide-react"

import { useSwiperStore } from "@/stores/swiperStore"

export const SwiperButtons = ({ section }: { section: string }) => {
	const { swiperRefs } = useSwiperStore()
	const currentSwiper = swiperRefs.find(swiper => swiper.section === section)

	return (
		<div className='flex items-center gap-1'>
			<button
				onClick={() => currentSwiper?.swiper.slidePrev()}
				className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'
			>
				<ChevronLeft color='var(--dark-text-primary)' size={16} />
			</button>
			<button
				onClick={() => currentSwiper?.swiper.slideNext()}
				className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'
			>
				<ChevronRight color='var(--dark-text-primary)' size={16} />
			</button>
		</div>
	)
}
