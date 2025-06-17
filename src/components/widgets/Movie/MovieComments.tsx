"use client"

import { ChevronRight, Plus } from "lucide-react"
import { useEffect } from "react"

import { ReviewsSheet } from "@/components/modals"
import { CommentItem } from "@/components/ui/CommentItem"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Skeleton } from "@/components/ui/skeleton"

import { useCommentsStore } from "@/stores/commentsStore"

type Props = {
	id: number
	movieInfo: { title: string; year: number }
}

export const MovieReviews = ({ id, movieInfo }: Props) => {
	const { fetchDemoComments, demoComments, loading } = useCommentsStore()
	useEffect(() => {
		fetchDemoComments(id)
	}, [])

	if (!demoComments.length) return null
	return (
		<section id='Reviews'>
			<div className='flex flex-col vsm:flex-row gap-2 vsm:items-center justify-between'>
				<SectionTitle title='User Reviews'>
					<ReviewsSheet
						movieInfo={movieInfo}
						slug={slug}
						className='rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-lg flex items-center gap-2.5 hover:opacity-80'
					>
						See all <ChevronRight size={12} />
					</ReviewsSheet>
				</SectionTitle>
				<button className='text-text-secondary flex items-center gap-2.5 rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset hover:opacity-80 justify-center'>
					Review <Plus />
				</button>
			</div>
			<div className='flex flex-col sm:flex-row items-stretch gap-5 mt-7'>
				{loading
					? [...new Array(2)].map((_, index) => (
							<Skeleton
								key={index}
								className='w-full h-[200px] bg-background-light-transparent-100'
							/>
						))
					: demoComments.map(comment => (
							<CommentItem
								isDemo={true}
								key={comment.id}
								comment={comment}
							/>
						))}
			</div>
		</section>
	)
}
