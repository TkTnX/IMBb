"use client"

import { Dot, Key } from "lucide-react"
import { useEffect, useState } from "react"

import { KnownForTab } from "@/components/features"
import { KnownForItem } from "@/components/ui/KnownForItem"

import { axiosInstance } from "@/configs/axios.config"
import { cn } from "@/lib/utils"
import { ICastPerson } from "@/types/cast.interface"
import { IMoviePeopleDetails } from "@/types/movie.interface"

export const KnownFor = ({ slug }: { slug: string }) => {
	const [data, setData] = useState<null | IMoviePeopleDetails>(null)
	const [showedItems, setShowedItems] = useState(15)
	const [choosedTabs, setChoosedTabs] = useState<string[]>([
		"cast",
		"directing"
	])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosInstance.get(
					`/actors/person/${slug}/movies`
				)

				setData(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	if (!data) return null

	const castList = Object.entries(data.cast || {})
	const crewList = Object.entries(data.crew || {})

	// TODO: Уменьшить количество кода, как-то сократить
	return (
		<div>
			<div className='flex items-center gap-2 mt-4'>
				{castList.length > 0 && (
					<KnownForTab
						keys='cast'
						value={castList}
						choosedTabs={choosedTabs}
						setChoosedTabs={setChoosedTabs}
					/>
				)}
				{crewList.map(([key, value]) => (
					<KnownForTab
						keys={key}
						key={key}
						value={value}
						choosedTabs={choosedTabs}
						setChoosedTabs={setChoosedTabs}
					/>
				))}
			</div>
			<div className='mt-4 flex flex-col gap-4'>
				{(!choosedTabs.length || choosedTabs.includes("cast")) && (
					<div>
						<h6 className='text-2xl font-bold capitalize'>Cast</h6>
						<div className='grid sm:grid-cols-2 gap-3'>
							{data.cast
								.slice(0, showedItems)
								.map((item: ICastPerson) => (
									<KnownForItem
										key={item.movie?.ids.slug}
										item={item}
									/>
								))}
						</div>
						<button
							disabled={showedItems >= data.cast.length}
							className={cn(
								"mt-2 text-center bg-main-yellow text-black py-2 px-4 rounded-lg hover:opacity-80",
								{ hidden: showedItems >= data.cast.length }
							)}
							onClick={() => setShowedItems(showedItems + 15)}
						>
							Load more
						</button>
					</div>
				)}
				{crewList.length > 0 &&
					crewList
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
									{value.map((item: ICastPerson) => (
										<KnownForItem
											key={item.movie?.ids.slug}
											item={item}
										/>
									))}
								</div>
								<button
									disabled={showedItems >= data.cast.length}
									className={cn(
										"mt-2 text-center bg-main-yellow text-black py-2 px-4 rounded-lg hover:opacity-80",
										{
											hidden:
												showedItems >= data.cast.length
										}
									)}
									onClick={() =>
										setShowedItems(showedItems + 15)
									}
								>
									Load more
								</button>
							</div>
						))}
			</div>
		</div>
	)
}
