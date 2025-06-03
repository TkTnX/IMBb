"use client"

import { Search } from "lucide-react"
import { useState } from "react"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import { HEADER_SEARCH_BY } from "@/constants/header.constants"

export const HeaderSearch = () => {
	const [searchBy, setSearchBy] = useState("All")
	return (
		<form className='sm:rounded-xl sm:h-10 sm:px-5 sm:bg-background-secondary text-text-primary sm:flex-1 flex items-center justify-between gap-4'>
			<Select>
				<SelectTrigger className='p-0 text-muted-foreground hidden sm:flex'>
					<SelectValue placeholder={searchBy} />
				</SelectTrigger>
				<SelectContent>
					{HEADER_SEARCH_BY.map(item => (
						<SelectItem
							key={item}
							value={item}
							onClick={() => setSearchBy(item)}
						>
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<input
				className='flex-1 outline-none text-sm placeholder:text-text-secondary hidden sm:block'
				type='text'
				placeholder='Search IMBb'
			/>
			<button>
				<Search size={24} className='sm:text-secondary' />
			</button>
		</form>
	)
}
