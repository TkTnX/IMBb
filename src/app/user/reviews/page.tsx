import {
	MoreToExplore,
	UserPageTop,
	UserReviewsList
} from "@/components/widgets"

const ReviewsPage = () => {
	return (
		<section>
			<UserPageTop
				title='Reviews'
				desc='This page compiles a list of titles you have rated, providing a convenient overview of all your ratings.'
			/>
			<div className='mt-10 flex flex-col lg:flex-row items-start gap-6'>
				{/* LIST */}
				<UserReviewsList />

				{/* More to explore (your ratings, your watchlist, your reviews) */}
				<MoreToExplore />
			</div>
		</section>
	)
}

export default ReviewsPage
