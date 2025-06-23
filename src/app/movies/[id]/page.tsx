import {
	Movie,
	MovieCast,
	MovieDetails,
	MoviePhotos,
	MovieReviews,
	MovieSidebar
} from "@/components/widgets"

import { axiosInstance } from "@/configs/axios.config"

const MoviePage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id
	const { data: movie } = await axiosInstance.get(`/tmdb/movies/${id}`)
	if (!movie || movie.code === 404)
		return (
			<div className='text-center my-10 text-9xl font-bold'>
				Movie is not found
			</div>
		)

	return (
		<div className='max-w-full mt-7 flex items-start gap-8'>
			<div className='flex flex-col gap-12 flex-1 max-w-full md:max-w-[calc(100%-120px)] lg:max-w-[calc(100%-182px)] '>
				<Movie movie={movie} />
				<MoviePhotos id={movie.id} />
				<MovieCast
					movieInfo={{
						title: movie.title,
						year: new Date(movie.release_date).getFullYear()
					}}
				/>
				<MovieReviews
					id={movie.id}
					movieInfo={{
						title: movie.title,
						year: new Date(movie.release_date).getFullYear()
					}}
				/>
				<MovieDetails movie={movie} />
			</div>
			<MovieSidebar />
		</div>
	)
}

export default MoviePage
