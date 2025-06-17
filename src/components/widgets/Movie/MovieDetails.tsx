import { MovieDetailsItem } from "@/components/ui/MovieDetailsItem"
import { SectionTitle } from "@/components/ui/SectionTitle"

import {  ITmdbMovieDetailed } from "@/types/movie.interface"

type Props = {
	movie: ITmdbMovieDetailed
}

export const MovieDetails = ({ movie }: Props) => {
	return (
		<section id='Details'>
			<SectionTitle title='Details' />
			<div>
				<MovieDetailsItem
					items={[
						new Date(movie.release_date).toLocaleDateString("en", {
							month: "long",
							day: "numeric",
							year: "numeric"
						})
					]}
					title='Release date'
				/>
				<MovieDetailsItem
					items={movie.spoken_languages}
					title='Countries of origin'
				/>
				{movie.homepage && (
					<MovieDetailsItem
						items={[movie.homepage]}
						title='Official Site'
					/>
				)}
				<MovieDetailsItem
					items={[movie.original_language]}
					title='Language'
				/>
				<MovieDetailsItem
					items={[String(new Date(movie.release_date).getFullYear())]}
					title='Year'
				/>
			</div>
		</section>
	)
}
