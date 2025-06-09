import { useEffect, useRef } from "react";



import { IComment } from "@/types/comment.interface";





type Props = {
    comments: IComment[]
    loading: boolean
    loadMore: () => void
}

export const useScrollBottom = ({ comments, loading, loadMore }: Props) => {
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

	return { scrollRef, scrollPositionRef, handleScroll }
}