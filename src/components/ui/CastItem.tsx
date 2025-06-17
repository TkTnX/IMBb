import Link from "next/link"

import { Img } from "./Img"
import { ICastPerson, ICrewPerson } from "@/types/cast.interface"

type Props = {
	person: ICastPerson | ICrewPerson
}

export const CastItem = ({ person }: Props) => {
	return (
		<Link
			href={`/person/${person.id}`}
			className='flex items-center justify-between max-w-[600px] gap-5 lg:gap-[65px]'
		>
			<Img
				src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w185${person.profile_path}`}
				alt={person.name}
				width={95}
				height={95}
				className='rounded-lg object-cover max-w-[95px] max-h-[95px] lg:flex-1'
			/>
			<div className='flex-1 flex flex-col lg:flex-row gap-2'>
				<p className='lg:flex-1'>{person.name}</p>
				<p className='lg:flex-1 text-text-secondary lg:text-text-primary'>
					{person.character || person.known_for_department}
				</p>
			</div>
		</Link>
	)
}
