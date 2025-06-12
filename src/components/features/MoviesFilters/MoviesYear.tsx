import { Search } from "lucide-react"
import { FormEvent } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useFilters } from "@/hooks/useFilters"

export const MoviesYear = () => {
	const { createQueryString } = useFilters()
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()

		const formData = new FormData(e.target as HTMLFormElement)
		createQueryString("years", formData.get("year") as string)
	}

	return (
		<AccordionItem value='years' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>
				Released Year
			</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				<form
					onSubmit={onSubmit}
					className='flex items-center border border-background-light-transparent-100 rounded-full'
				>
					<input
						name='year'
						placeholder='Released Year'
						className='flex-1 outline-none p-2 '
					/>
					<button className='hover:opacity-80 pr-2'>
						<Search />
					</button>
				</form>
			</AccordionContent>
		</AccordionItem>
	)
}
