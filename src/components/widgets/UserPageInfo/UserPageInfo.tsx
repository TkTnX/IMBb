"use client"

import { Info } from "lucide-react"

import { UserPageSection } from "./UserPageSection"
import { useUserStore } from "@/stores/userStore"

export const UserPageInfo = () => {
	const { user } = useUserStore()
	return (
		<div className='flex-1'>
			<div className='bg-background-secondary border border-background-transparent-600 border-l-8 rounded-lg p-3'>
				<h6 className='flex items-center gap-2'>
					<Info /> Welcome to your new profile
				</h6>
				<p className='font-semibold text-white text-xl mt-2'>
					We're still working on updating some profile features.
				</p>
			</div>
			<UserPageSection
				title='Reviews'
				desc='Your reviews are public.'
				items={user?.reviews.slice(0, 5) || []}
				link='/user/reviews'
			/>
			<UserPageSection
				title='Watchlist'
				desc='Your Watchlist is public.'
				items={user?.watchList.movies.slice(0, 5) || []}
				link='/user/watchlist'
			/>
		</div>
	)
}
