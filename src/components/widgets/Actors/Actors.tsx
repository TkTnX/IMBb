import { cache } from "react"

import { Section } from "@/components/ui/Section"

import { ActorsList } from "./ActorsList"
import { ITmdbActor } from "@/types/actor.interface"

export const Actors = cache(
	async ({ data }: { data: { results: ITmdbActor[] } }) => {
		return (
			<Section
				section='actors'
				title='Actors'
				href='/actors'
				bgTitle='People'
			>
				{"message" in data ? (
					<p className='text-center my-10 text-red-500'>
						{data.message as string}
					</p>
				) : (
					<ActorsList list={data.results} />
				)}
			</Section>
		)
	}
)
