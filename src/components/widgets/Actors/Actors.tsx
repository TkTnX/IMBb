import { Section } from "@/components/ui/Section"

import { ActorsList } from "./ActorsList"
import { axiosInstance } from "@/configs/axios.config"

export const Actors = async () => {
	const { data } = await axiosInstance.get("/actors")
	return (
		<Section title='Actors' href='/actors' bgTitle='Actors'>
			<ActorsList list={data.flatMap(item => item.person)} />
		</Section>
	)
}
