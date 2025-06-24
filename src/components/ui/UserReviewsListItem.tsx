import { Info, Star } from "lucide-react"
import Link from "next/link"

import { Img } from "./Img"
import { Review } from "@/generated/prisma"

type Props = {
	review: Review
}
export const UserReviewsListItem = ({ review }: Props) => {
	return (
		<div className='rounded-xl p-5 bg-background-light-transparent-50 flex flex-col vsm:flex-row sm:flex-col md:flex-row items-start gap-5 relative w-full'>
			<div className='flex items-start w-full gap-5'>
				<Img
					className='rounded-2xl'
					src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w154${review.poster_path}`}
					alt={review.movieTitle}
					width={100}
					height={120}
				/>
				<div>
					<div className='flex items-start justify-between flex-1'>
						<h6 className='font-semibold'>{review.movieTitle}</h6>
						<div className='flex items-center gap-2.5  '>
							<div className='flex items-center gap-2'>
								<Star
									fill='var(--color-main-yellow)'
									color='var(--color-main-yellow)'
									size={18}
								/>
								<p>Your rating: {review.rating}</p>
							</div>

							<Link
								href={`/movies/${review.movieTmdbId}`}
								className='hover:opacity-80'
							>
								<Info size={18} />
							</Link>
						</div>
					</div>
					<p className='mt-4 text-lg text-white'>{review.content}</p>
				</div>
			</div>
		</div>
	)
}
