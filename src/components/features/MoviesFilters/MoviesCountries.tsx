import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import { axiosInstance } from "@/configs/axios.config"
import { ICountry } from "@/types/country.interface"

export const MoviesCountries = () => {
	const [countries, setCountries] = useState<ICountry[]>([])
	useEffect(() => {
		const fetchCountries = async () => {
			const { data } = await axiosInstance.get("/countries")
			setCountries(data)
			return data
		}

		fetchCountries()
	}, [])

	return (
		<AccordionItem value='countries' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>Countries</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				{countries.map(country => (
					<label
						key={country.code}
						className='flex items-center gap-1 cursor-pointer'
					>
						<Checkbox value={country.code} />
						{country.name}
					</label>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
