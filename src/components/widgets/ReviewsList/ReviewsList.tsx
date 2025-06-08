"use client"

import { useEffect, useRef } from "react"

import { CommentItem } from "@/components/ui/CommentItem"
import { Skeleton } from "@/components/ui/skeleton"

import { IComment } from "@/types/comment.interface"

type Props = {
	comments: IComment[]
	loadMore?: () => void
	loading: boolean
}

// * TODO: Сортировка
// * TODO: Если trakt api позволяет, сортировка по рейтингу и спойлерам.
// * TODO: Скелетоны
// * TODO: Кастомный слайдер
// * TODO: При прокрутке до конца - подгружать новые комментарии

export const ReviewsList = ({ comments, loadMore, loading }: Props) => {
	const scrollRef = useRef<HTMLDivElement>(null)
	const scrollPositionRef = useRef<number>(0)
	const handleScroll = (e: any) => {
		const bottom =
			e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

		if (bottom && !loading) {
			scrollPositionRef.current = e.target.scrollTop
			loadMore?.()
		}
	}

	useEffect(() => {
		if (scrollRef.current && scrollPositionRef.current) {
			scrollRef.current.scrollTop = scrollPositionRef.current
		}
	}, [comments])

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
		</div>
	)
}
