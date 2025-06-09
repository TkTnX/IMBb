"use client"

import { useEffect, useRef } from "react"
import useInfiniteScroll from "react-infinite-scroll-hook"

import { CommentItem } from "@/components/ui/CommentItem"
import { Skeleton } from "@/components/ui/skeleton"

import { useScrollBottom } from "@/hooks/useScrollBottom"

import { IComment } from "@/types/comment.interface"

type Props = {
	comments: IComment[]
	loadMore: () => void
	loading: boolean
	hasMore: boolean
}

export const ReviewsList = ({
	comments,
	loadMore,
	loading,
	hasMore
}: Props) => {
	const { scrollRef, handleScroll } = useScrollBottom({
		comments,
		loading,
		loadMore
	})

	const [infiniteRef] = useInfiniteScroll({
		loading,
		hasNextPage: hasMore,
		onLoadMore: loadMore!,
		rootMargin: "0px 0px 400px 0px"
	})

	return (
		<div
			ref={scrollRef}
			onScroll={handleScroll}
			className='flex flex-col gap-4 w-full mt-6 overflow-y-auto max-h-[calc(100vh-250px)] pr-2'
		>
			{comments && !loading
				? comments.map(comment => (
						<CommentItem key={comment.id} comment={comment} />
					))
				: [...new Array(5)].map((_, index) => (
						<Skeleton
							className='w-full min-h-[140px] bg-background-secondary'
							key={index}
						/>
					))}
			<div ref={infiniteRef} />
		</div>
	)
}
