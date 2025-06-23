import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"
import { prisma } from "@/lib/prisma-client"
import { ITmdbMovie } from "@/types/movie.interface"
import { revalidatePath } from "next/cache"

export async function POST(req: NextRequest) {
	try {
		const { movieId, userClerkId } = await req.json()

		const user = await prisma.user.findFirst({
			where: { clerkId: userClerkId }
		})

		if (!user)
			return NextResponse.json({
				message: "User is not found!",
				code: 404
			})

		const watchList = await prisma.watchList.findFirst({
			where: { user_id: user.id },
			include: {
				movies: true
			}
		})

		if (!watchList) {
			return NextResponse.json({
				message: "Watchlist not found",
				code: 404
			})
		}

		if (watchList.movies.find(movie => movie.tmdbId === movieId)) {
			const deletedMovie = await prisma.watchlistMovie.delete({
				where: {
					tmdbId: movieId,
					watchListId: watchList.id
				}
			})

			return NextResponse.json(deletedMovie)
		}

		const { data: movie } = await tmdbApi.get<ITmdbMovie>(
			`/movie/${movieId}`
		)
		if (!movie || ("code" in movie && movie.code === 404))
			return NextResponse.json({
				message: "Movie not found",
				code: 404
			})

		const addedMovie = await prisma.watchlistMovie.create({
			data: {
				tmdbId: movieId,
				backdrop_path: movie.backdrop_path,
				genre_ids: movie.genre_ids,
				original_language: movie.original_language,
				original_title: movie.original_title,
				overview: movie.overview,
				popularity: movie.popularity,
				poster_path: movie.poster_path,
				release_date: movie.release_date,
				title: movie.title,
				video: movie.video,
				vote_average: movie.vote_average,
				vote_count: movie.vote_count,
				watchListId: watchList.id
			}
		})

		revalidatePath("/watchlist")
		return NextResponse.json(addedMovie)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ message: error.message, code: error.code })
			: NextResponse.json({ message: "Something went wrong", code: 500 })
	}
}
