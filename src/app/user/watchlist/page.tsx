import { Metadata } from "next"

import { MoreToExplore, WatchlistList } from "@/components/widgets"

export const metadata: Metadata = {
	title: "Your Watchlist"
}

const Watchlist = () => {
	return (
		<section>
			<div className='min-h-[150px] md:h-[200px] flex flex-col justify-center text-black'>
				<h2 className='text-4xl md:text-8xl  font-bold'>
					Your Watchlist
				</h2>
				<p className='text-xs sm:text-base font-semibold'>
					Your Watchlist is the place to track the titles you want to
					watch. You can sort your Watchlist by the IMDb rating or
					popularity score and arrange your titles in the order you
					want to see them.
				</p>
				<div className='h-[150px] md:h-[200px] w-full bg-main-yellow absolute left-0 right-0 top-[72px] -z-10' />
			</div>
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
