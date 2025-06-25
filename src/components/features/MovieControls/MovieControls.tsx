import { Star } from "lucide-react"

import { RateButton } from "../RateButton"

import { ITmdbMovie } from "@/types/movie.interface"

type Props = {
	rating: number
	movie: ITmdbMovie
}

export const MovieControls = ({ rating, movie }: Props) => {
	return (
		<div className='flex items-center gap-2.5'>
			<RateButton
				className='py-2 px-4 bg-background-light-transparent-50 shadow-inset rounded-lg'
				movie={movie}
			/>
			{/* RATING */}
			<div className='flex items-center gap-1 rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset flex-1 vsm:flex-auto justify-center'>
				<Star
					fill='var(--color-main-yellow)'
					color='var(--color-main-yellow)'
					size={18}
				/>
				<p className='text-background-transparent-600 text-lg'>
					<span className='text-text-primary'>
						{rating.toFixed(1)}
					</span>
					/10
				</p>
			</div>
		</div>
	)
}
