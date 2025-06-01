import { IMovie } from "@/types/movie.interface"

export const getAvailableImages = (movie: IMovie) => {
	return movie.images.thumb.concat(movie.images.banner, movie.images.poster)
}
