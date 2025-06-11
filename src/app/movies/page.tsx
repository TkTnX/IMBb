import { MoviesList } from "@/components/widgets"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "List of the movies"
}

const MoviesPage = () => {
	return (
		<section className="mt-12">
            <h1 className="text-2xl">List of the movies</h1>
            <MoviesList />
		</section>
	)
}

export default MoviesPage
