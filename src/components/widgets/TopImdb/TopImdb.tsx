import { Section } from "@/components/ui/Section"

import { TopImdbList } from "./TopImdbList"
import { IMovie } from "@/types/movie.interface"

export const TopImdb = async ({ data }: { data: IMovie[] }) => {
	return (
		<Section section='top-imdb' title='Top on IMDb this week'>
			<TopImdbList list={data?.flatMap(item => item.movie)} />
		</Section>
	)
}
