"use client"

import { Star } from "lucide-react"

import { useReviews } from "@/hooks/useReviews"

import { RateModal } from "../modals"

import { cn } from "@/lib/utils"
import { ITmdbMovie } from "@/types/movie.interface"

type Props = {
	movie: ITmdbMovie
	className?: string
}

export const RateButton = ({ movie, className }: Props) => {
	const { isRated } = useReviews(movie)
	console.log(isRated)
	return (
		<RateModal movie={movie}>
			<button
				className={cn(
					"flex items-center gap-2 hover:opacity-80",
					className
				)}
			>
				<Star
					className={cn("", {
						"fill-main-blue stroke-main-blue": isRated
					})}
					size={18}
				/>
				{isRated ? isRated.rating : "Rate"}
			</button>
		</RateModal>
	)
}
