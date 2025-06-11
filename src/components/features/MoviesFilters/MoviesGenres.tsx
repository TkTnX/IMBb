import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import { axiosInstance } from "@/configs/axios.config"
import { IGenre } from "@/types/genre.interface"

export const MoviesGenres = () => {
	const [genres, setGenres] = useState<IGenre[]>([])
	useEffect(() => {
		const fetchGenres = async () => {
			const { data } = await axiosInstance.get("/genres")
			setGenres(data)
			return data
		}

		fetchGenres()
	}, [])

	return (
		<AccordionItem value='genres' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>Genres</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				{genres.map(genre => (
					<label
						key={genre.slug}
						className='flex items-center gap-1 cursor-pointer'
					>
						<Checkbox value={genre.slug} />
						{genre.name}
					</label>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
