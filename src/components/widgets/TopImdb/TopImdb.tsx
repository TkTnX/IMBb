import { cache } from "react"

import { Section } from "@/components/ui/Section"

import { TopImdbList } from "./TopImdbList"
import { axiosInstance } from "@/configs/axios.config"
import { IMovie } from "@/types/movie.interface"

export const TopImdb = cache(async () => {
	const { data } = await axiosInstance.get("/trakt/movies?type=trending")
	return (
		<Section section='top-imdb' title='Top on IMDb this week'>
			<TopImdbList
				list={data.flatMap(
					(item: { watchers: number; movie: IMovie }) => item.movie
				)}
			/>
		</Section>
	)
})
