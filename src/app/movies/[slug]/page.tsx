import {
	Movie,
	MovieCast,
	MovieDetails,
	MoviePhotos,
	MovieReviews,
	MovieSidebar
} from "@/components/widgets"

import { axiosInstance } from "@/configs/axios.config"
import { getAvailableImages } from "@/helpers/getAvailableImages"

const MoviePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params).slug

	const { data } = await axiosInstance.get(
		`/movies/${slug}/full?extended=full,images`
	)
	const { movie, cast, comments } = data
	return (
		<div className='max-w-full mt-7 flex items-start gap-8'>
			<div className='flex flex-col gap-12 flex-1 max-w-full md:max-w-[calc(100%-120px)] lg:max-w-[calc(100%-182px)] '>
				<Movie cast={cast} movie={movie} />
				<MoviePhotos photos={getAvailableImages(movie)} />
				<MovieCast cast={cast} />
				<MovieReviews
					movieInfo={{ title: movie.title, year: movie.year }}
					slug={slug}
					comments={comments}
				/>
				<MovieDetails movie={movie} />
			</div>
			<MovieSidebar />
		</div>
	)
}

export default MoviePage
