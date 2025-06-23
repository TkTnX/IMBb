import { cache } from "react"

import { Section } from "@/components/ui/Section"

import { ActorsList } from "./ActorsList"
import { axiosInstance } from "@/configs/axios.config"

export const Actors = cache(async () => {
	const { data } = await axiosInstance.get("/tmdb/person")

	return (
		<Section
			section='actors'
			title='Actors'
			href='/actors'
			bgTitle='People'
		>
			{data.message ? (
				<p className='text-center my-10 text-red-500'>{data.message}</p>
			) : (
				<ActorsList list={data.results} />
			)}
		</Section>
	)
})
