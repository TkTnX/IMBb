import { useState } from "react"

import { KnownForItem } from "@/components/ui/KnownForItem"
import { Skeleton } from "@/components/ui/skeleton"

import { cn } from "@/lib/utils"
import { ICastPerson } from "@/types/cast.interface"

type Props = {
	data: Record<string, ICastPerson[]>
	choosedTabs: string[]
	loading: boolean
}

export const KnownForList = ({ data, choosedTabs, loading }: Props) => {
	const [showedItems, setShowedItems] = useState(15)
	return (
		<div className='mt-4 flex flex-col gap-4'>
			{loading ? (
				<div>
					<Skeleton className='w-28 h-[30px] bg-background-secondary' />
					<div className='grid sm:grid-cols-2 gap-3 mt-6'>
						{[...new Array(8)].map((_, index) => (
							<Skeleton
								key={index}
								className='w-full h-[100px] bg-background-secondary'
							/>
						))}
					</div>
				</div>
			) : (
				Object.entries(data)
					.filter(
						([key]) =>
							choosedTabs.includes(key) || !choosedTabs.length
					)
					.map(([key, value]) => (
						<div key={key}>
							<h6 className='text-2xl font-bold capitalize'>
								{key}
							</h6>
							<div className='grid sm:grid-cols-2 gap-3'>
								{value
									.slice(0, showedItems)
									.map((item: ICastPerson) => (
										<KnownForItem
											key={item.movie?.ids.tmdb}
											item={item}
										/>
									))}
							</div>
							<button
								disabled={showedItems >= value.length}
								className={cn(
									"mt-2 text-center bg-main-yellow text-black py-2 px-4 rounded-lg hover:opacity-80",
									{ hidden: showedItems >= value.length }
								)}
								onClick={() => setShowedItems(showedItems + 15)}
							>
								Load more
							</button>
						</div>
					))
			)}
		</div>
	)
}
