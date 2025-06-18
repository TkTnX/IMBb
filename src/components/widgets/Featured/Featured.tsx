import { Section } from "@/components/ui/Section"

import { FeaturedList } from "./FeaturedList"
import { axiosInstance } from "@/configs/axios.config"
import { IMovieList } from "@/types/movie.interface"

export const Featured = async () => {
	const { data } = await axiosInstance.get("/trakt/movies?type=favorited")
	return (
		<Section section='featured' title='Featured Today'>
			<FeaturedList
				list={data.flatMap((item: IMovieList) => item.movie)}
			/>
		</Section>
	)
}
