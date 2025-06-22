import { Metadata } from "next"

import { GenresList } from "@/components/widgets"

import { axiosInstance } from "@/configs/axios.config"

export const metadata: Metadata = {
	title: "Search by Genres"
}

const GenresPage = async () => {
	const { data } = await axiosInstance.get("/tmdb/genres")
	return (
		<section className='mt-12'>
			<h1 className='text-2xl'>Find movies by your favorite genre</h1>
			<GenresList genres={data.genres} />
		</section>
	)
}

export default GenresPage
