import { MoviesList } from "@/components/widgets"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "List of the movies"
}

const MoviesPage = () => {
	return (
		<section>
            <h1>List of the movies</h1>
            <MoviesList />
		</section>
	)
}

export default MoviesPage
