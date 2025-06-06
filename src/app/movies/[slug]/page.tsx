import { Movie, MovieSidebar } from "@/components/widgets"
import { MovieCast } from "@/components/widgets/Movie/MovieCast"
import { MoviePhotos } from "@/components/widgets/Movie/MoviePhotos"
import { MovieReviews } from "@/components/widgets/Movie/MovieComments"

import { axiosInstance } from "@/configs/axios.config"
import { getAvailableImages } from "@/helpers/getAvailableImages"

const MoviePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params).slug

	const { data: movie } = await axiosInstance.get(`/movies/${slug}`)
	const { data: cast } = await axiosInstance.get(`/actors/${slug}`)
	const { data: comments } = await axiosInstance.get(
		`/movies/${slug}/comments/newest?limit=2`
	)
	return (
		<div className='max-w-full mt-7 flex gap-8'>
			<div className='flex flex-col gap-12 max-w-[calc(100%-182px)] '>
				<Movie cast={cast} movie={movie} />
				<MoviePhotos photos={getAvailableImages(movie)} />
                <MovieCast cast={cast} />
                <MovieReviews slug={slug} comments={comments} />
			</div>
			<MovieSidebar />
		</div>
	)
}

export default MoviePage
