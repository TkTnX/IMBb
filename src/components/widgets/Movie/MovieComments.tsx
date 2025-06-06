import { ChevronRight, Plus } from "lucide-react"
import Link from "next/link"

import { CommentItem } from "@/components/ui/CommentItem"

import { IComment } from "@/types/comment.interface"

type Props = {
	comments: IComment[]
	slug: string
}

export const MovieReviews = ({ comments, slug }: Props) => {
	return (
		<section>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='w-1 h-1 bg-main-yellow rounded-full' />
					<h4 className='text-2xl text-text-primary'>User Reviews</h4>
					<Link
						href={`/movies/${slug}/comments`}
						className='rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-lg flex items-center gap-2.5 hover:opacity-80'
					>
						See all <ChevronRight size={12} />
					</Link>
				</div>
				<button className='text-text-secondary flex items-center gap-2.5 rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset hover:opacity-80'>
					Review <Plus />
				</button>
			</div>
			<div className='flex items-start gap-5 mt-7'>
				{comments.map(comment => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</div>
		</section>
	)
}
