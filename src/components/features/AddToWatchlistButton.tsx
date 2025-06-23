import { BookmarkCheck } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"

type Props = {
	className?: string
	isAdded?: boolean
}

export const AddToWatchlistButton = ({ className, isAdded }: Props) => {
	return (
		<button
			className={cn("absolute top-0  hover:opacity-80 z-20", className)}
		>
			{isAdded ? (
				<Image
					width={39}
					height={50}
					src={"/images/icons/bookmark-checked.svg"}
					alt='add to wishlist'
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
