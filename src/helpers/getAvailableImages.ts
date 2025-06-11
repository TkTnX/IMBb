import { IMovie } from "@/types/movie.interface"

export const getAvailableImages = (movie: IMovie) => {
	if (!movie.images) return []
	return movie.images.thumb.concat(
		movie.images.banner,
		movie.images.poster,
		movie.images.clearart,
		movie.images.logo,
		movie.images.thumb,
		movie.images.fanart
	)
}
