"use client"

import { ListFilter } from "lucide-react"

import { Accordion } from "@/components/ui/accordion"

import { MoviesCountries } from "./MoviesCountries"
import { MoviesGenres } from "./MoviesGenres"
import { MoviesLanguages } from "./MoviesLanguages"
import { MoviesYear } from "./MoviesYear"

export const MoviesFilters = () => {
	return (
		<div className='rounded-xl p-5 bg-background-light-transparent-50 h-full lg:max-w-72 lg:flex-1 w-full sm:w-auto lg:w-full'>
			<p className='flex items-center gap-2.5 text-text-secondary'>
				Filters <ListFilter />
			</p>

			<Accordion type='multiple' className='mt-9'>
				<MoviesGenres />
				<MoviesYear />
				<MoviesLanguages />
				<MoviesCountries />
			</Accordion>
		</div>
	)
}
