import { Star } from "lucide-react"

type Props = {
	rating: number
}

export const MovieControls = ({ rating }: Props) => {
	return (
		<div className='flex items-center gap-2.5'>
			<button className='flex items-center gap-2.5 rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset hover:opacity-80'>
				<Star size={18} />
				<span>Rate</span>
			</button>
			{/* RATING */}
			<div className='flex items-center gap-1 rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset'>
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
