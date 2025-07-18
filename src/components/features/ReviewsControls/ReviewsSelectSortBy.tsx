import { ArrowUpDown } from "lucide-react"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger
} from "@/components/ui/select"

import { COMMENTS_SORT_BY } from "@/constants/comments.constants"

import { useCommentsStore } from "@/stores/commentsStore"

export const ReviewsSelectSortBy = () => {
	const { sortBy, setSortBy } = useCommentsStore()
	return (
		<Select value={sortBy} onValueChange={setSortBy}>
			<SelectTrigger
				childrenIcon
				className='rounded-lg !py-2.5 !px-4 bg-background-light-transparent-50 shadow-inset flex items-center justify-between gap-2 flex-1'
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
