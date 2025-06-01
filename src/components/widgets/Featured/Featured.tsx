import { Section } from "@/components/ui/Section"

import { FeaturedList } from "./FeaturedList"
import { axiosInstance } from "@/configs/axios.config"

export const Featured = async () => {
	const { data } = await axiosInstance.get("/lists/trending")
	return (
		<Section title='Featured Today' >
			<FeaturedList list={data} />
		</Section>
	)
}
