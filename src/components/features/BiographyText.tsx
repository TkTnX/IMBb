"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"

export const BiographyText = ({ text }: { text: string }) => {
	const [open, setOpen] = useState(false)

	if (!text)
		return <p className='mt-3 text-text-secondary'>No more information</p>

	return (
		<div
			onClick={() => setOpen(!open)}
			className='mt-3 relative cursor-pointer group'
		>
			<p
				className={cn("text-text-secondary group-hover:text-white", {
					"text-white": open
				})}
			>
				{open ? text : `${text.slice(0, 500)}...`}
			</p>
			<button>
				<ChevronRight
					color='var(--color-main-yellow)'
					className={cn("absolute right-0 bottom-0", {
						"rotate-90": open
					})}
				/>
			</button>
		</div>
	)
}
