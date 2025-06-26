import { Star } from "lucide-react"
import Link from "next/link"

import { Img } from "./Img"
import { Review, WatchlistMovie } from "@/generated/prisma"

type Props = {
	movie: Review | WatchlistMovie
}

export const UserPageSectionItem = ({ movie }: Props) => {
	const isReview = "movieTmdbId" in movie
	const movieObj = isReview
		? {
				title: movie.movieTitle,
				poster_path: movie.poster_path,
				id: movie.movieTmdbId
			}
		: {
				title: movie.title,
				poster_path: movie.poster_path,
				id: movie.id
			}

	return (
		<div className='flex-1'>
			<div className='w-full h-[250px] relative'>
				<Img
					className='rounded-2xl'
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w154${movie.poster_path}`}
					alt={movieObj.title}
					fill
				/>
			</div>
			<div className='flex items-center gap-2 mt-2'>
				{isReview ? (
					<>
						<Star
							color='var(--color-main-blue)'
							size={18}
							fill='var(--color-main-blue)'
						/>
						<p>{movie.rating}</p>
					</>
				) : (
					<>
						<Star
							color='var(--color-main-yellow)'
							size={18}
							fill='var(--color-main-yellow)'
						/>
						<p>{movie.vote_average.toFixed(1)}</p>
					</>
				)}
			</div>
			<Link
				className='hover:underline mt-2 block'
				href={`/movies/${movieObj.id}`}
			>
				{movieObj.title}
			</Link>
		</div>
	)
}
