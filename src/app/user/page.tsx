import { MoreToExplore, UserPageInfo, UserPageTop } from "@/components/widgets"

const UserPage = () => {
	return (
		<div>
			<UserPageTop />
			<div className='mt-10 flex flex-col lg:flex-row items-start gap-6'>
				{/* LIST */}
				<UserPageInfo />

				{/* More to explore (your ratings, your watchlist, your reviews) */}
				<MoreToExplore />
			</div>
		</div>
	)
}

export default UserPage
