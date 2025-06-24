import { MoreToExploreItem } from "./MoreToExploreItem"

export const MoreToExplore = () => {
	return (
		<div className='w-full lg:max-w-[300px] flex-1'>
			<h4 className='pl-3 border-l-4 border-l-main-yellow text-3xl font-medium'>
				More to explore
			</h4>
			<div className='mt-10 flex flex-wrap lg:flex-col gap-2'>
				<MoreToExploreItem
					title='Your ratings'
					desc='Titles you have rated'
					link='ratings'
					items={[]}
				/>
				<MoreToExploreItem
					title='Your Watchlist'
					desc='1 title'
					link='watchlist'
					items={[]}
				/>
				<MoreToExploreItem
					title='Your Reviews'
					desc='1 reviews'
					link='reviews'
					items={[]}
				/>
			</div>
		</div>
	)
}
