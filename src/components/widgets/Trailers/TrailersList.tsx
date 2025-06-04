"use client"

import { TrailerItem } from "@/components/ui/TrailerItem"

import { useTrailers } from "@/hooks/useTrailers"

import { TrailersListSkeleton } from "./TrailersListSkeleton"

export const TrailersList = () => {
	const { loading, movies, handleLoadMore } = useTrailers()

	return (
		<>
			<div className='mt-12 grid vsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-2 gap-y-6'>
				{!loading && movies.length ? (
					movies.map(movie => (
						<TrailerItem key={movie.ids.imdb} movie={movie} />
					))
				) : (
					<TrailersListSkeleton />
				)}
				{loading && movies.length ? <TrailersListSkeleton /> : ""}
			</div>
			<div className='flex justify-center mt-10'>
				<button
					onClick={handleLoadMore}
					className='bg-main-yellow text-black py-2 px-4 rounded-lg  hover:opacity-80'
				>
					Load more
				</button>
			</div>
		</>
	)
}
