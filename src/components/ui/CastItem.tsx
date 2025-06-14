import Image from "next/image"
import Link from "next/link"

import { ICastPerson } from "@/types/cast.interface"

type Props = {
	person: ICastPerson
}

export const CastItem = ({ person }: Props) => {
	return (
		<Link
			href={`/person/${person.person.ids.slug}`}
			className='flex items-center justify-between max-w-[600px] gap-5 lg:gap-[65px]'
		>
			<Image
				src={
					person.images.headshot[0]
						? `https://${person.images.headshot[0]}`
						: "/images/no-avatar.jpg"
				}
				onError={e => (e.currentTarget.src = "/images/no-avatar.jpg")}
				alt={person.person.name}
				width={95}
				height={95}
				className='rounded-lg object-cover max-w-[95px] max-h-[95px] lg:flex-1'
			/>
			<div className="flex-1 flex flex-col lg:flex-row gap-2">
			<p className='lg:flex-1'>{person.person.name}</p>
			<p className='lg:flex-1 text-text-secondary lg:text-text-primary'>{person.job || person.character}</p>
		</div>
		</Link>
	)
}
