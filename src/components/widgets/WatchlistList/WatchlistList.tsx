"use server"

import { auth } from "@clerk/nextjs/server"

import { BigMovieItem } from "@/components/ui/BigMovieItem"

import { prisma } from "@/lib/prisma-client"
import { ITmdbMovie } from "@/types/movie.interface"

async function getWatchList(userId: string) {
	try {
		const res = await prisma.watchList.findFirst({
			where: {
				userClerkId: userId
			},
			include: {
				movies: true
			}
		})
		return res
	} catch (error) {
		console.log(error)
	}
}

export const WatchlistList = async () => {
	const { userId } = await auth()
	const watchList = await getWatchList(userId!)
	if (!watchList?.id)
		return (
			<p className='my-10 text-center text-red-500 font-bold flex-1 w-full'>
				Something went wrong!
			</p>
		)

	if (watchList.movies.length === 0) return <p>Your Watchlist is empty</p>
	return (
		<div className='flex-1 '>
			<p>{watchList.movies.length} title</p>
			<div className='flex flex-col gap-4 mt-10'>
				{watchList.movies.map(movie => (
					<BigMovieItem
						isAdded
						key={movie.id}
						movie={
							{
								...movie,
								id: movie.tmdbId
							} as unknown as ITmdbMovie
						}
					/>
				))}
			</div>
		</div>
	)
}
