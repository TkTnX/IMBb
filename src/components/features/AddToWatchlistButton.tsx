"use client"

import { Loader2 } from "lucide-react"
import Image from "next/image"

import { useAddToWatchlist } from "@/hooks/useAddToWatchlist"

import { cn } from "@/lib/utils"
import { useUserStore } from "@/stores/userStore"

type Props = {
	className?: string
	movieId: number
	isAdded?: boolean
}


export const AddToWatchlistButton = ({
	className,
	movieId,
	isAdded
}: Props) => {
	const { user } = useUserStore()
	const { onClick, loading, added } = useAddToWatchlist(
		user?.watchList?.movies?.some(movie => movie.tmdbId === movieId) ||
			isAdded
	)


	return (
		<button
			onClick={() => onClick(movieId)}
			className={cn("absolute top-0  hover:opacity-80 z-20", className)}
		>
			{loading ? (
				<div className='relative'>
					<Image
						width={39}
						height={50}
						src={"/images/icons/bookmark.svg"}
						alt='adding to wishlist'
					/>
					<Loader2 className='animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
				</div>
			) : added ? (
				<Image
					width={39}
					height={50}
					src={"/images/icons/bookmark-checked.svg"}
					alt='added to wishlist'
				/>
			) : (
				<Image
					width={39}
					height={50}
					src={"/images/icons/bookmark-plus.svg"}
					alt='add to wishlist'
				/>
			)}
		</button>
	)
}
