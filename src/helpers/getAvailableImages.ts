import { IMovie } from "@/types/movie.interface"

export const getAvailableImages = (movie: IMovie) => {
	if (!movie || !movie.images) return []

	const images = [
		movie.images.thumb,
		movie.images.poster,
		movie.images.banner,
		movie.images.clearart,
		movie.images.logo,
		movie.images.fanart
	]

	return images
		.flat()
		.filter(Boolean)
		.map(url => url)
}
