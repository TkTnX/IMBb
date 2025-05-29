import { HeroFeaturedItem } from "./HeroFeaturedItem"

export const HeroFeatured = () => {
	return (
		<div className='mt-6 flex flex-col gap-6'>
			{[...new Array(2)].map((_, index) => (
				<HeroFeaturedItem index={String(index)} key={index} />
			))}
		</div>
	)
}
