import Image from "next/image"
import Link from "next/link"

import { IActor } from "@/types/actor.interface"

type Props = {
	actor: IActor
}

export const ActorItem = ({ actor }: Props) => {
	const age =
		new Date().getFullYear() - new Date(actor.birthday!).getFullYear()
	console.log(actor)
	return (
		<Link href={`/person/${actor.ids.slug}`} className=''>
			<div className='relative w-full h-[180px]'>
				<Image
					loading='lazy'
					src={
						actor.images.headshot[0]
							? `https://${actor.images.headshot[0]}`
							: "/images/no-avatar.jpg"
					}
					fill
					className='rounded-2xl  object-cover '
					alt={actor.name}
				/>
			</div>
			<h6 className='mt-3 text-text-primary'>{actor.name}</h6>
			{actor.birthday && !actor.death ? (
				<p>{age} years old</p>
			) : (
				actor.death && (
					<p>Dead in: {new Date(actor.death).getFullYear()}</p>
				)
			)}
		</Link>
	)
}
