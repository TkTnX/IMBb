import { Star } from "lucide-react"

import { RateModal } from "../modals"

import {  ITmdbMovie } from "@/types/movie.interface"
import { cn } from "@/lib/utils"

type Props = {
	movie: ITmdbMovie
	className?:string
}

export const RateButton = ({ movie, className }: Props) => {
	return (
		<RateModal movie={movie}>
			<button className={cn('flex items-center gap-2 hover:opacity-80', className)}>
				<Star size={18} />
				<p>Rate</p>
			</button>
		</RateModal>
	)
}
