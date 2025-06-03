import { Section } from "@/components/ui/Section"

import { TopPicksList } from "./TopPicksList"
import { axiosInstance } from "@/configs/axios.config"

export const TopPicks = async () => {
    const { data } = await axiosInstance.get("/movies/top/top-picks")
    
	return (
		<Section
			section="top-picks"
			title='Top Picks'
			subtitle='TV shows and movies just for you'
			href='/movies/top'
			bgTitle='What to Watch'
		>
			<TopPicksList list={data} />
		</Section>
	)
}
