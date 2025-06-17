import { ITmdbMovie } from "@/types/movie.interface"

export const getAvailableImages = (movie: ITmdbMovie) => {
	if (!movie) return []

	const images = [movie.poster_path, movie.backdrop_path]

	return images
		.flat()
		.filter(Boolean)
		.map(url => url)
}
