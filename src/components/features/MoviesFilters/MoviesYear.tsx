import { Search } from "lucide-react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

export const MoviesYear = () => {
	return (
		<AccordionItem value='year' className='w-full border-none'>
			<AccordionTrigger className='font-bold'>
				Released Year
			</AccordionTrigger>
			<AccordionContent className='max-h-32 overflow-y-scroll flex flex-col gap-2'>
				<form className='flex items-center border border-background-light-transparent-100 rounded-full'>
					<input
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
