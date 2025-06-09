"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"

import { CastItem } from "@/components/ui/CastItem"

import { cn } from "@/lib/utils"
import { ICrew } from "@/types/cast.interface"
import { IMoviePeopleDetails } from "@/types/movie.interface"

type Props = {
	cast: IMoviePeopleDetails
}

export const Cast = ({ cast }: Props) => {
	const [activeTab, setActiveTab] = useState("cast")
	const tabs = ["cast", ...Object.keys(cast.crew)]

	return (
		<div className='flex items-start gap-12 mt-8 h-[calc(100vh-250px)]'>
			<div className='w-[350px] border-r-2 border-r-background-light-transparent-100 h-full flex flex-col gap-2.5'>
				{tabs.map(tab => (
					<button
						key={tab}
						className={cn(
							"flex items-center gap-2.5 hover:text-main-yellow",
							activeTab === tab && "text-main-yellow font-bold"
						)}
						onClick={() => setActiveTab(tab)}
					>
						{tab[0].toUpperCase() + tab.slice(1)}
						{activeTab === tab && <ChevronRight />}
					</button>
				))}
			</div>
			<div className='overflow-y-auto max-h-full pr-2 flex-1 '>
				<h6 className='text-xl font-normal mb-11'>
					{activeTab[0].toUpperCase() + activeTab.slice(1)}{" "}
					<span className='text-text-secondary'>
						(in credits order)
					</span>
				</h6>
				<div className="flex flex-col gap-5 w-full">
					{activeTab === "cast"
						? cast.cast.map(person => (
								<CastItem
									key={person.person.ids.slug}
									person={person}
								/>
							))
						: cast.crew[activeTab as keyof ICrew].map(person => (
								<CastItem
									key={person.person.ids.slug}
									person={person}
								/>
							))}
				</div>
			</div>
		</div>
	)
}
