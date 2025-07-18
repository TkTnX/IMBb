import { BoxOfficeItem } from "@/components/ui/BoxOfficeItem"
import { Section } from "@/components/ui/Section"

import { IBoxOfficeItem } from "@/types/movie.interface"

export const BoxOffice = async ({ data }: { data: IBoxOfficeItem[] }) => {
	return (
		<Section title='Top box office (US)' bgTitle='Explore'>
			<div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-7'>
				{data.map((item: IBoxOfficeItem, index: number) => (
					<BoxOfficeItem
						key={item.movie.ids.slug}
						number={index + 1}
						item={item}
					/>
				))}
			</div>
		</Section>
	)
}
