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

	const { data: movie } = await axiosInstance.get(`/movies/${slug}`)
	if (!movie || movie.code === 404) return <div className="text-center my-10 text-9xl font-bold">Movie is not found</div>
	return (
		<div className='max-w-full mt-7 flex items-start gap-8'>
			<div className='flex flex-col gap-12 flex-1 max-w-full md:max-w-[calc(100%-120px)] lg:max-w-[calc(100%-182px)] '>
				<Movie movie={movie} />
				<MoviePhotos photos={getAvailableImages(movie)} />
				<MovieCast
					movieInfo={{ title: movie.title, year: movie.year }}
				/>
				<MovieReviews
					movieInfo={{ title: movie.title, year: movie.year }}
					slug={slug}
				/>
				<MovieDetails movie={movie} />
			</div>
			<MovieSidebar />
		</div>
	)
}

export default MoviePage
