import { MovieDetailsItem } from "@/components/ui/MovieDetailsItem"
import { SectionTitle } from "@/components/ui/SectionTitle"

import { IMovie } from "@/types/movie.interface"

type Props = {
	movie: IMovie
}

export const MovieDetails = ({ movie }: Props) => {
	return (
		<section id='Details'>
			<SectionTitle title='Details' />
			<div>
				<MovieDetailsItem
					items={[
						new Date(movie.released).toLocaleDateString("en", {
							month: "long",
							day: "numeric",
							year: "numeric"
						})
					]}
					title='Release date'
				/>
				<MovieDetailsItem
					items={movie.languages}
					title='Countries of origin'
				/>
				{movie.homepage && (
					<MovieDetailsItem
						items={[movie.homepage]}
						title='Official Site'
					/>
				)}
				<MovieDetailsItem
					items={[movie.language]}
					title='Language'
				/>
				<MovieDetailsItem items={[String(movie.year)]} title='Year' />
			</div>
		</section>
	)
}
