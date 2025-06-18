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
import { ICountry } from "@/types/country.interface"

export const MoviesCountries = () => {
	const [countries, setCountries] = useState<ICountry[]>([])
	const { setSelectedCountries } = useFilters()
	useEffect(() => {
		const fetchCountries = async () => {
			const { data } = await axiosInstance.get("/trakt/countries")
			setCountries(data)
			return data
		}

		fetchCountries()
	}, [])

	const onCheck = (code: string) => {
		setSelectedCountries(prev => {
			if (prev.includes(code)) {
				return prev.filter((country: string) => country !== code)
			} else {
				return [...prev, code]
			}
		})
	}

	return (
		<AccordionItem value='countries' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>Countries</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				{!countries
					? [...new Array(5)].map((_, index) => (
							<Skeleton className='w-full h-5' key={index} />
						))
					: countries.map(country => (
							<label
								key={country.code}
								className='flex items-center gap-1 cursor-pointer'
							>
								<Checkbox
									onCheckedChange={() =>
										onCheck(country.code)
									}
									value={country.code}
								/>
								{country.name}
							</label>
						))}
			</AccordionContent>
		</AccordionItem>
	)
}
