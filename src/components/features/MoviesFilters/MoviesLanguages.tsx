import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import { axiosInstance } from "@/configs/axios.config"
import { ILanguage } from "@/types/language.interface"
import { Skeleton } from "@/components/ui/skeleton"

export const MoviesLanguages = () => {
	const [languages, setLanguages] = useState<ILanguage[]>([])
	useEffect(() => {
		const fetchLanguages = async () => {
			const { data } = await axiosInstance.get("/languages")
			setLanguages(data)
			return data
		}

		fetchLanguages()
	}, [])

	return (
		<AccordionItem value='languages' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>Languages</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				{!languages
					? [...new Array(5)].map((_, index) => (
							<Skeleton className='w-full h-5' key={index} />
						))
					: languages.map(languages => (
							<label
								key={languages.code}
								className='flex items-center gap-1 cursor-pointer'
							>
								<Checkbox value={languages.code} />
								{languages.name}
							</label>
						))}
			</AccordionContent>
		</AccordionItem>
	)
}
