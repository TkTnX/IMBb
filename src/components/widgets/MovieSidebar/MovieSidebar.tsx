"use client"

import Link from "next/link"

import { MOVIE_PAGE_TABS } from "@/constants/movie-page.constants"

import { useScrollSpy } from "@/hooks/useScrollSpy"

import { cn } from "@/lib/utils"

export const MovieSidebar = () => {
	const activeId = useScrollSpy(MOVIE_PAGE_TABS, 120) 

	return (
		<div className='hidden md:flex lg:min-w-[150px]  sticky top-7  flex-col'>
			{MOVIE_PAGE_TABS.map(item => (
				<Link
					key={item}
					className={cn("hover:text-main-yellow transition border-l-4 border-background-light-transparent-100 pl-5", {
						"text-main-yellow border-main-yellow": item === activeId
					})}
					href={`#${item}`}
				>
					{item}
				</Link>
			))}
		</div>
	)
}
