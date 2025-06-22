import { HeroFeaturedItem } from "./HeroFeaturedItem"
import { IMovieList } from "@/types/movie.interface"

export const HeroFeatured = ({ items }: { items: IMovieList[] }) => {
	return (
		<div className='mt-6 flex flex-1 lg:flex-col pb-4 gap-6 overflow-y-hidden '>
			{items.map(({ movie }, index) => (
				<HeroFeaturedItem
					key={movie.ids.slug}
					index={index.toString()}
					movie={movie}
				/>
			))}
		</div>
	)
}
