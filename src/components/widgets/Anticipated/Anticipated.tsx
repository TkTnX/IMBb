import { cache } from "react"

import { Section } from "@/components/ui/Section"

import { AnticipatedList } from "./AnticipatedList"
import { axiosInstance } from "@/configs/axios.config"
import { IMovieList } from "@/types/movie.interface"

export const Anticipated = cache(async () => {
	const { data } = await axiosInstance.get("/trakt/movies?type=anticipated")
	return (
		<Section section='anticipated' title='Most anticipated'>
			<AnticipatedList
				list={data.flatMap((item: IMovieList) => item.movie)}
			/>
		</Section>
	)
})
