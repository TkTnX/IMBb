"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"

import { CastItem } from "@/components/ui/CastItem"

import { cn } from "@/lib/utils"
import { ICrew } from "@/types/cast.interface"
import { IMoviePeopleDetails } from "@/types/movie.interface"

type Props = {
	credits: IMoviePeopleDetails
}

export const Cast = ({ credits }: Props) => {
	const [activeTab, setActiveTab] = useState("cast")
	const tabs = [
		"cast",
		...new Set(credits.crew.flatMap(person => person.job))
	]

	console.log(credits.cast.find(p => p.name.includes("Dave")))
	return (
		<div className='flex flex-col sm:flex-row  items-start gap-4 md:gap-12 mt-8  overflow-y-auto sm:overflow-hidden sm:h-[calc(100vh-250px)] '>
			<div className='overflow-y-auto max-h-full w-full sm:w-auto md:w-[350px] md:pr-0 md:border-r-2 border-r-background-light-transparent-100  flex gap-2.5 flex-row sm:flex-col  overflow-x-auto md:overflow-x-visible pb-2 justify-between'>
				{tabs.map(tab => (
					<button
						key={tab}
						className={cn(
							"flex items-center gap-2.5 hover:text-main-yellow text-nowrap min-w-max capitalize",
							activeTab === tab && "text-main-yellow font-bold"
						)}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
						{activeTab === tab && <ChevronRight />}
					</button>
				))}
			</div>
			<div className='overflow-y-auto max-h-full pr-2 flex-1 '>
				<h6 className='text-xl font-normal mb-4 md:mb-11 capitalize'>
					{activeTab}{" "}
					<span className='text-text-secondary'>
						(in credits order)
					</span>
				</h6>
				<div className='flex flex-col gap-5 w-full'>
					{activeTab === "cast"
						? credits.cast.map(person => (
								<CastItem key={person.id} person={person} />
							))
						: credits.crew
								.filter(person => person.job === activeTab)
								.map(person => (
									<CastItem key={person.id} person={person} />
								))}
				</div>
			</div>
		</div>
	)
}
