import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"

import { useFilters } from "@/hooks/useFilters"

import { axiosInstance } from "@/configs/axios.config"
import { IGenre } from "@/types/genre.interface"

export const MoviesGenres = () => {
	const [genres, setGenres] = useState<IGenre[]>([])
	const { setSelectedGenres } = useFilters()
	useEffect(() => {
		const fetchGenres = async () => {
			const { data } = await axiosInstance.get("/trakt/genres")
			setGenres(data)
			return data
		}

		fetchGenres()
	}, [])

	const onCheck = (slug: string) => {
		setSelectedGenres(prev => {
			if (prev.includes(slug)) {
				return prev.filter((genre: string) => genre !== slug)
			} else {
				return [...prev, slug]
			}
		})
	}

	return (
		<AccordionItem value='genres' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>Genres</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				{!genres
					? [...new Array(5)].map((_, index) => (
							<Skeleton className='w-full h-5' key={index} />
						))
					: genres.map(genre => (
							<label
								key={genre.slug}
								className='flex items-center gap-1 cursor-pointer'
							>
								<Checkbox
									onCheckedChange={() => onCheck(genre.slug)}
									value={genre.slug}
								/>
								{genre.name}
							</label>
						))}
			</AccordionContent>
		</AccordionItem>
	)
}
