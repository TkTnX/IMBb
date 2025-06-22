"use client"

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"

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
	const searchParams = useSearchParams()
	const router = useRouter()
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()

		const formData = new FormData(e.target as HTMLFormElement)
		const query = formData.get("query")
		if (query === "") return

		router.push(`/search?q=${query}&type=${searchBy.toLowerCase()}`)
	}

	return (
		<form
			onSubmit={onSubmit}
			className='sm:rounded-xl sm:h-10 sm:px-5 sm:bg-background-secondary text-text-primary sm:flex-1 flex items-center justify-between gap-4'
		>
			<Select onValueChange={setSearchBy}>
				<SelectTrigger className='p-0 text-muted-foreground hidden sm:flex'>
					<SelectValue placeholder={searchBy} />
				</SelectTrigger>
				<SelectContent>
					{HEADER_SEARCH_BY.map(item => (
						<SelectItem key={item.type} value={item.type}>
							{item.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<input
				defaultValue={searchParams.get("q") || ""}
				className='flex-1 outline-none text-sm placeholder:text-text-secondary hidden sm:block'
				type='text'
				name='query'
				placeholder='Search IMBb'
			/>
			<button>
				<Search size={24} className='sm:text-secondary' />
			</button>
		</form>
	)
}
