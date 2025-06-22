import Image from "next/image"
import Link from "next/link"

import { Img } from "./Img"
import { ITmdbActor } from "@/types/actor.interface"

type Props = {
	actor: ITmdbActor
}

export const ActorItem = ({ actor }: Props) => {
	return (
		<Link href={`/person/${actor.id}`} className=''>
			<div className='relative w-full h-[180px]'>
				<Img
					loading='lazy'
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w185${actor.profile_path}`}
					fill
					className='rounded-2xl  object-cover '
					alt={actor.name || ""}
				/>
			</div>
			<h6 className='mt-3 text-text-primary'>{actor.name}</h6>
			<p>{actor.known_for_department}</p>
		</Link>
	)
}
