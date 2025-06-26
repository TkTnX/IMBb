"use client"

import { MoreToExploreItem } from "./MoreToExploreItem"
import { useUserStore } from "@/stores/userStore"

export const MoreToExplore = () => {
	const { user } = useUserStore()
	return (
		<div className='w-full lg:max-w-[300px] flex-1'>
			<h4 className='pl-3 border-l-4 border-l-main-yellow text-3xl font-medium'>
				More to explore
			</h4>
			<div className='mt-10 flex flex-wrap lg:flex-col gap-2'>
				<MoreToExploreItem
					title='Your Watchlist'
					desc={`${user?.watchList?.movies.length || 0} title`}
					link='watchlist'
					items={user?.watchList.movies || []}
				/>
				<MoreToExploreItem
					title='Your Reviews'
					desc={`${user?.reviews.length || 0} reviews`}
					link='reviews'
					items={user?.reviews || []}
				/>
			</div>
		</div>
	)
}
