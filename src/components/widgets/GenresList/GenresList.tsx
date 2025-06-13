"use client"

import Link from "next/link"

import { IGenre } from "@/types/genre.interface"

type Props = {
	genres: IGenre[]
}

export const GenresList = ({ genres }: Props) => {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12'>
			{genres.map(genre => (
				<Link
					className='rounded-xl p-4 bg-background-light-transparent-50 hover:bg-background-light-transparent-100 text-center shadow-md hover:shadow-lg border border-background-light-transparent-100 text-sm sm:text-lg font-semibold capitalize'
					key={genre.slug}
					href={`/movies?genres=${genre.slug}`}
				>
					{genre.name}
				</Link>
			))}
		</div>
	)
}
