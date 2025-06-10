import { ReviewsCheckboxSpoiler } from "./ReviewsCheckboxSpoiler"
import { ReviewsSelectSortBy } from "./ReviewsSelectSortBy"

export const ReviewsControls = () => {
	return (
		<div className=' flex flex-wrap items-center gap-6'>
			<ReviewsSelectSortBy />
			<ReviewsCheckboxSpoiler />
		</div>
	)
}
