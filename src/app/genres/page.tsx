import { Metadata } from "next"
import Link from "next/link"

import { GenresList } from "@/components/widgets"

import { axiosInstance } from "@/configs/axios.config"

export const metadata: Metadata = {
	title: "Search by Genres"
}

const GenresPage = async () => {
	const { data } = await axiosInstance.get("/trakt/genres")
	return (
		<section className='mt-12'>
			<h1 className='text-2xl'>Find movies by your favorite genre</h1>
			<GenresList genres={data} />
		</section>
	)
}

export default GenresPage
