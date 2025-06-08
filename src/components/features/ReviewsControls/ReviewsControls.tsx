import { ReviewsCheckboxSpoiler } from "./ReviewsCheckboxSpoiler"
import { ReviewsSelectRating } from "./ReviewsSelectRating"
import { ReviewsSelectSortBy } from "./ReviewsSelectSortBy"

export const ReviewsControls = () => {
	return (
		<div className=' flex items-center gap-6'>
			<ReviewsSelectSortBy />
			<ReviewsSelectRating />
			<ReviewsCheckboxSpoiler />
		</div>
	)
}
