import { cache } from "react"

import { Section } from "@/components/ui/Section"

import { ActorsList } from "./ActorsList"
import { axiosInstance } from "@/configs/axios.config"
import { IActor } from "@/types/actor.interface"

export const Actors = cache(async () => {
	const { data } = await axiosInstance.get("/trakt/actors")
	const actors = data.flatMap((item: { person: IActor }) => item.person)
	return (
		<Section
			section='actors'
			title='Actors'
			href='/actors'
			bgTitle='People'
		>
			<ActorsList list={actors} />
		</Section>
	)
})
