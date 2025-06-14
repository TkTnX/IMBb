import { Dot, Star } from "lucide-react"

import { IComment } from "@/types/comment.interface"
import { cn } from "@/lib/utils"

type Props = {
	comment: IComment
	isDemo?: boolean
}

export const CommentItem = ({ comment, isDemo = false }: Props) => {
	return (
		<div className='rounded-2xl w-full p-5 bg-background-light-transparent-50 flex-1'>
			{comment.user_rating && (
				<div className='flex items-center gap-2'>
					<Star
						fill='var(--main-yellow)'
						color='var(--main-yellow)'
						size={16}
					/>
					<p>
						<span className='text-main-yellow'>
							{comment.user_rating || 1}
						</span>
						/10
					</p>
				</div>
			)}

			<div className='flex items-center gap-2.5 mt-3.5'>
				<p className='text-[#f3dd83]'>{comment.user.username}</p>
				<Dot size={4} color='var(--dark-text-secondary)' />
				<p>
					{new Date(comment.created_at).toLocaleString("en", {
						month: "long",
						day: "numeric",
						year: "numeric"
					})}
				</p>
			</div>
			<p className={cn('mt-3.5  ', isDemo && 'max-h-[200px] overflow-y-auto')}>{comment.comment}</p>
		</div>
	)
}
