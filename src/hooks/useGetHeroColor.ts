import { RefObject, useState } from "react"
import type { Swiper as SwiperType } from "swiper"

import { getColor } from "@/helpers/getAverageColor"

export const useGetHeroColor = (swiperRef: RefObject<SwiperType | null>) => {
	const [bgColor, setBgColor] = useState<string>("#000")

	const onSlideChange = (activeIndex: number) => {
		const activeSlide = swiperRef?.current?.slides[activeIndex]

		getColor({ setBgColor, itemRef: activeSlide })
	}

	return {
		bgColor,
		onSlideChange
	}
}
