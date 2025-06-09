"use client"

import { X } from "lucide-react"
import { useState } from "react"

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "../ui/sheet"
import { Cast } from "../widgets"

import { IMoviePeopleDetails } from "@/types/movie.interface"

type Props = {
	children: React.ReactNode
	movieInfo: { title: string; year: number }
	cast: IMoviePeopleDetails
}

export const CastSheet = ({ children, movieInfo, cast }: Props) => {
	const [open, setOpen] = useState(false)
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className='rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-lg flex items-center gap-2.5 hover:opacity-80'>
				{children}
			</SheetTrigger>
			<SheetContent side='bottom' className='h-full border-t-0 pt-6'>
				<div className='container flex items-start gap-6'>
					<button onClick={() => setOpen(false)}>
						<X size={18} />
					</button>
					<div className='flex-1'>
						<SheetHeader className=' p-0 '>
							<SheetTitle className='text-2xl text-text-primary font-normal'>
								{movieInfo.title}{" "}
								<span className='text-xl text-text-secondary'>
									({movieInfo.year})
								</span>
							</SheetTitle>
							<h6 className='mt-4 text-xl text-text-primary'>
								Full Cast & Crew
							</h6>
						</SheetHeader>
						<Cast cast={cast} />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
