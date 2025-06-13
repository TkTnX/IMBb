import { Metadata } from "next"
import Link from "next/link"

import { axiosInstance } from "@/configs/axios.config"
import { GenresList } from "@/components/widgets"

export const metadata: Metadata = {
	title: "Search by Genres"
}

const GenresPage = async () => {
	const { data } = await axiosInstance.get("/genres")
	return (
		<section className='mt-12'>
			<h1 className='text-2xl'>Find movies by your favorite genre</h1>
			<GenresList genres={data} />
		</section>
	)
}

export default GenresPage
