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