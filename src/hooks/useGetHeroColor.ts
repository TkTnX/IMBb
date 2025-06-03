import { RefObject, useState } from "react"
import type { Swiper as SwiperType } from "swiper"

import { getAverageColor } from "@/helpers/getAverageColor"

export const useGetHeroColor = (swiperRef: RefObject<SwiperType | null>) => {
	const [bgColor, setBgColor] = useState<string>("#000")

	const onSlideChange = (activeIndex: number) => {
		const activeSlide = swiperRef?.current?.slides[activeIndex]
		const image = activeSlide?.querySelector(
			"img"
		) as HTMLImageElement | null
		if (!image) return

		const canvas = document.createElement("canvas")
		const ctx = canvas.getContext("2d")
		if (!ctx) return

		const drawColorFromImage = () => {
			canvas.width = image.naturalWidth
			canvas.height = image.naturalHeight

			ctx.drawImage(image, 0, 0)
			const imageData = ctx.getImageData(
				0,
				0,
				canvas.width,
				canvas.height
			)?.data

			getAverageColor(imageData).then(color => {
				setBgColor(color)
			})
		}

		if (image.complete && image.naturalWidth !== 0) {
			drawColorFromImage()
		} else {
			image.onload = () => {
				drawColorFromImage()
			}
		}
	}

	return {
		bgColor,
		onSlideChange
	}
}
