import { Metadata } from "next"

import { MoreToExplore, UserPageTop, WatchlistList } from "@/components/widgets"

export const metadata: Metadata = {
	title: "Your Watchlist"
}

const Watchlist = () => {
	return (
		<section>
			<UserPageTop
				title='Watchlist'
				desc='Your Watchlist is the place to track the titles you want to watch. You can sort your Watchlist by the IMDb rating or popularity score and arrange your titles in the order you want to see them.'
			/>
			<div className='mt-10 flex flex-col lg:flex-row items-start gap-6'>
				{/* LIST */}
				<WatchlistList />

				{/* More to explore (your ratings, your watchlist, your reviews) */}
				<MoreToExplore />
			</div>
		</section>
	)
}

export default Watchlist
