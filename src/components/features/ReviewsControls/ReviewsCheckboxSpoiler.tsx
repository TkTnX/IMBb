import { Checkbox } from "@/components/ui/checkbox"

import { useCommentsStore } from "@/stores/commentsStore"

export const ReviewsCheckboxSpoiler = () => {
	const { setHideSpoilers, hideSpoilers } = useCommentsStore()
	return (
		<label className='text-text-secondary rounded-lg py-2 px-4 bg-background-light-transparent-50 shadow-inset flex items-center gap-2.5 cursor-pointer flex-1'>
			<Checkbox
				checked={hideSpoilers}
				onCheckedChange={setHideSpoilers}
				className='data-[state=checked]:border-text-secondary border-text-secondary'
			/>
			<span className="text-nowrap">Hide Spoilers</span>
		</label>
	)
}
