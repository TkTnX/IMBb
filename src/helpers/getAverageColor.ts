export const getColor = async ({
	setBgColor,
	itemRef
}: {
	setBgColor: (color: string) => void
	itemRef: HTMLElement | undefined
}) => {
	const image = itemRef?.querySelector("img") as HTMLImageElement | null
	if (!image) return
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")
	if (!ctx) return
	const drawColorFromImage = async () => {
		canvas.width = image.naturalWidth
		canvas.height = image.naturalHeight

		ctx.drawImage(image, 0, 0)
		const imageData = ctx.getImageData(
			0,
			0,
			canvas.width,
			canvas.height
		)?.data

		const color = await getAverageColor(imageData)
		setBgColor(color)
		return color
	}

	if (image.complete && image.naturalWidth !== 0) {
		drawColorFromImage()
	} else {
		image.onload = () => {
			drawColorFromImage()
		}
	}
}

export const getAverageColor = async (imageData: Uint8ClampedArray) => {
	const len = imageData.length
	const pixelsCount = len / 4
	const arraySum: number[] = [0, 0, 0, 0]

	for (let i = 0; i < len; i += 4) {
		arraySum[0] += imageData[i]
		arraySum[1] += imageData[i + 1]
		arraySum[2] += imageData[i + 2]
		arraySum[3] += imageData[i + 3]
	}

	return `rgba(${arraySum[0] / pixelsCount}, ${arraySum[1] / pixelsCount}, ${arraySum[2] / pixelsCount}, ${arraySum[3] / pixelsCount})`
}
