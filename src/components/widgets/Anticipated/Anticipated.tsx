import { Section } from "@/components/ui/Section"

import { AnticipatedList } from "./AnticipatedList"
import { IMovieList } from "@/types/movie.interface"

export const Anticipated = async ({ data }: { data: IMovieList[] }) => {
	return (
		<Section section='anticipated' title='Most anticipated'>
			<AnticipatedList
				list={data?.flatMap((item: IMovieList) => item.movie)}
			/>
		</Section>
	)
}
