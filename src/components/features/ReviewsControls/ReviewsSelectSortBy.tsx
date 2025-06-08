import { ArrowUpDown } from "lucide-react"
import { useState } from "react"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger
} from "@/components/ui/select"

import { COMMENTS_SORT_BY } from "@/constants/comments.constants"

export const ReviewsSelectSortBy = () => {
	const [sortBy, setSortBy] = useState("newest")
	return (
		<Select value={sortBy} onValueChange={setSortBy}>
			<SelectTrigger
				childrenIcon
				className='rounded-lg !py-2.5 !px-4 bg-background-light-transparent-50 shadow-inset flex items-center justify-between gap-2'
			>
				<span className='text-text-secondary'>Sort By:</span>
				<span>
					{COMMENTS_SORT_BY.find(item => item.value === sortBy)?.name}
				</span>
				<ArrowUpDown color='var(--color-text-primary)' size={24} />
			</SelectTrigger>

			<SelectContent>
				{COMMENTS_SORT_BY.map(comment => (
					<SelectItem key={comment.value} value={comment.value}>
						{comment.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
