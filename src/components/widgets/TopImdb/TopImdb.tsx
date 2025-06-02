import { Section } from "@/components/ui/Section"

import { TopImdbList } from "./TopImdbList"
import { axiosInstance } from "@/configs/axios.config"
import { IMovie } from "@/types/movie.interface"


export const TopImdb = async () => {
	const { data } = await axiosInstance.get("/movies/top/top-imdb")
	return (
		<Section title='Top on IMDb this week'>
			<TopImdbList
				list={data.flatMap(
					(item: { watchers: number; movie: IMovie }) => item.movie
				)}
			/>
		</Section>
	)
}
