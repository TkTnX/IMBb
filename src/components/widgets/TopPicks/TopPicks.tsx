import { Section } from "@/components/ui/Section"

import { TopPicksList } from "./TopPicksList"
import { IMovie } from "@/types/movie.interface"

export const TopPicks = async ({ data }: { data: IMovie[] }) => {
	return (
		<Section
			section='top-picks'
			title='Top Picks'
			subtitle='TV shows and movies just for you'
			href='/movies'
			bgTitle='What to Watch'
		>
			<TopPicksList list={data} />
		</Section>
	)
}
