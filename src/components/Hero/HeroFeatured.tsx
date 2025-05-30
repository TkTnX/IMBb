import { HeroFeaturedItem } from "./HeroFeaturedItem"

export const HeroFeatured = () => {
	// TODO: В будущем тут возможно тоже сделать слайдер
	return (
		<div className='mt-6 flex flex-1 lg:flex-col pb-4 gap-6 overflow-y-hidden '>
			{[...new Array(4)].map((_, index) => (
				<HeroFeaturedItem index={String(index)} key={index} />
			))}
		</div>
	)
}
