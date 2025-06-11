"use client"

import InfiniteScroll from "react-infinite-scroll-component"

import { MoviesFilters } from "@/components/features"
import { BigMovieItem } from "@/components/ui/BigMovieItem"
import { Skeleton } from "@/components/ui/skeleton"

import { useMoviesList } from "@/hooks/useMoviesList"

export const MoviesList = () => {
	const { movies, error, loadMore, hasMore } = useMoviesList()

	return (
		<div className='flex flex-col sm:flex-row items-start gap-8 h-full mt-16'>
			{/* ФИЛЬТРАЦИЯ */}
			<MoviesFilters />

			{/* СПИСОК */}
			<div className='flex-1'>
				<form className='flex items-center  pb-7 border-b-2 border-b-background-light-transparent-100'>
					<input
						placeholder='Search by title...'
						className='flex-1 outline-none p-2 max-w-52  border border-background-light-transparent-100 rounded-lg'
					/>
				</form>
				{error && (
					<p className='text-red-500 text-center my-10'>{error}</p>
				)}
				<InfiniteScroll
					hasMore={hasMore}
					className='flex flex-col gap-10 w-full mt-9'
					dataLength={movies.length}
					next={loadMore}
					loader={[...new Array(5)].map((_, index) => (
						<Skeleton
							key={index}
							className='w-full h-[318px] bg-background-light-transparent-100'
						/>
					))}
					endMessage={<p className='text-center'>No more results</p>}
				>
					{movies.map(movie => (
						<BigMovieItem key={movie.ids.slug} movie={movie} />
					))}
				</InfiniteScroll>
			</div>
		</div>
	)
}
