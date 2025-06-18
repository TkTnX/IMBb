import { cache } from "react"

import { Section } from "@/components/ui/Section"

import { TopPicksList } from "./TopPicksList"
import { axiosInstance } from "@/configs/axios.config"

export const TopPicks = cache(async () => {
	const { data } = await axiosInstance.get("/trakt/movies?type=popular")

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
})
