import { Star } from "lucide-react"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger
} from "@/components/ui/select"

import { useCommentsStore } from "@/stores/commentsStore"

export const ReviewsSelectRating = () => {
	const { rating, setRating } = useCommentsStore()
	return (
		<Select value={String(rating)} onValueChange={setRating}>
			<SelectTrigger className='rounded-lg !py-2.5 !px-4 bg-background-light-transparent-50 shadow-inset flex items-center justify-between gap-2'>
				<span className='text-text-secondary'>Rating:</span>
				<div className='flex items-center gap-1'>
					{rating !== "0" && rating
						? [...new Array(Number(rating))].map((_, index) => (
								<Star
									size={18}
									key={index}
									color='var(--color-main-yellow)'
									fill='var(--color-main-yellow)'
								/>
							))
						: "Unset"}
				</div>
			</SelectTrigger>

			<SelectContent>
				<SelectItem value='0'>Unset</SelectItem>
				{[...new Array(3)].map((_, index) => (
					<SelectItem
						key={index}
						value={String(index === 0 ? 1 : index === 1 ? 3 : 5)}
					>
						{[
							...new Array(index === 0 ? 1 : index === 1 ? 3 : 5)
						].map((_, index) => (
							<Star
								size={18}
								key={index}
								color='var(--color-main-yellow)'
								fill='var(--color-main-yellow)'
							/>
						))}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
