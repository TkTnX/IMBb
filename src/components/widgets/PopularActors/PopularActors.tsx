"use client"

import Link from "next/link"
import InfiniteScroll from "react-infinite-scroll-component"

import { Img } from "@/components/ui/Img"
import { Skeleton } from "@/components/ui/skeleton"

import { usePopularActors } from "@/hooks/usePopularActors"

const getSlug = (name: string) =>
	name
		.split(" ")
		.map(n => n.trim().toLowerCase())
		.join("-")

export const PopularActors = () => {
	const { actors, error, hasMore, loadMore } = usePopularActors()
	if (error) return <p className='text-center text-red-500 my-10'>{error}</p>

	return (
		<InfiniteScroll
			dataLength={actors.length}
			next={loadMore}
			loader={[...new Array(5)].map((_, index) => (
				<Skeleton key={index} className='w-full h-[100px] my-2.5' />
			))}
			hasMore={hasMore}
			className='border rounded-lg p-4 border-text-secondary mt-10 '
		>
			{actors.map((actor, index) => (
				<Link
					href={`/person/${getSlug(actor.name)}`}
					className='flex items-center gap-2 py-4 border-b border-b-text-secondary relative group'
					key={index}
				>
					<div className='relative w-[60px] h-[60px]'>
						<Img
							className='rounded-full w-full h-full object-cover'
							alt={actor.name}
							fill
							src={`media.themoviedb.org/t/p/w220_and_h330_face/${actor.profile_path}`}
						/>
					</div>
					<div>
						<p>{index + 1}</p>
						<h6 className='font-bold text-white group-hover:opacity-80'>
							{actor.name}
						</h6>
						<p className='text-xs'>{actor.known_for_department}</p>
						<p className='text-main-blue text-sm relative z-20'>
							{actor.known_for[0].title ||
								actor.known_for[0].original_name}
						</p>
					</div>
				</Link>
			))}
		</InfiniteScroll>
	)
}
