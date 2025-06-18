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
import { ILanguage } from "@/types/language.interface"

export const MoviesLanguages = () => {
	const [languages, setLanguages] = useState<ILanguage[]>([])
	const { setSelectedLanguages } = useFilters()
	useEffect(() => {
		const fetchLanguages = async () => {
			const { data } = await axiosInstance.get("/trakt/languages")
			setLanguages(data)
			return data
		}

		fetchLanguages()
	}, [])

	const onCheck = (code: string) => {
		setSelectedLanguages(prev => {
			if (prev.includes(code)) {
				return prev.filter((language: string) => language !== code)
			} else {
				return [...prev, code]
			}
		})
	}

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
								<Checkbox
									onCheckedChange={() =>
										onCheck(languages.code)
									}
									value={languages.code}
								/>
								{languages.name}
							</label>
						))}
			</AccordionContent>
		</AccordionItem>
	)
}
