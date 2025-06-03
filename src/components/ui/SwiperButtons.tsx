import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"

import { useSwiperStore } from "@/stores/swiperStore"

export const SwiperButtons = () => {
	const { setPrevRef, setNextRef } = useSwiperStore()
	const prevRef = useRef<HTMLButtonElement>(null)
	const nextRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		setPrevRef(prevRef)
		setNextRef(nextRef)
	}, [prevRef, nextRef])

	return (
		<div className='flex items-center gap-1'>
			<button
				ref={prevRef}
				className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'
			>
				<ChevronLeft color='var(--dark-text-primary)' size={16} />
			</button>
			<button
				ref={nextRef}
				className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'
			>
				<ChevronRight color='var(--dark-text-primary)' size={16} />
			</button>
		</div>
	)
}
