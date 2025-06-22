import { IMovie } from "@/types/movie.interface"

export const getAvailableImages = (movie: IMovie) => {
	if (!movie) return []

	const images = [
		movie.images.banner,
		movie.images.clearart,
		movie.images.fanart,
		movie.images.logo,
		movie.images.poster,
		movie.images.thumb
	]

	return images
		.flat()
		.filter(Boolean)
		.map(url => url)
}
