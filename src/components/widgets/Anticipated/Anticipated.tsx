import { Section } from "@/components/ui/Section"

import { AnticipatedList } from "./AnticipatedList"
import { axiosInstance } from "@/configs/axios.config"
import { IMovieList } from "@/types/movie.interface"

export const Anticipated = async () => {
	const { data } = await axiosInstance.get("/movies/anticipated")
	return (
		<Section title='Most anticipated'>
			<AnticipatedList
				list={data.flatMap((item: IMovieList) => item.movie)}
			/>
		</Section>
	)
}
