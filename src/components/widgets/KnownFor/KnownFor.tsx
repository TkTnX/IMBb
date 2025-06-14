"use client"

import { Dot, Key } from "lucide-react"
import { useEffect, useState } from "react"

import { KnownForTab } from "@/components/features"
import { KnownForItem } from "@/components/ui/KnownForItem"

import { axiosInstance } from "@/configs/axios.config"
import { IMoviePeopleDetails } from "@/types/movie.interface"

export const KnownFor = ({ slug }: { slug: string }) => {
	const [data, setData] = useState<null | IMoviePeopleDetails>(null)
	const [choosedTabs, setChoosedTabs] = useState<string[]>([
		"cast",
		"directing",
		"writing"
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
	console.log(Object.entries(data.crew).map(([key, value]) => value))

	const castList = Object.entries(data.cast)
	const crewList = Object.entries(data.crew)
	console.log(crewList)

	return (
		<div>
			<div className='flex items-center gap-2 mt-4'>
				{castList.length > 0 && (
					<button className='capitalize rounded-2xl border border-main-yellow text-lg py-2 px-4 flex items-center gap-2 hover:bg-main-yellow hover:text-white'>
						Cast <Dot size={16} />
						<span>{castList.length}</span>
					</button>
				)}
				{crewList.map(([key, value]) => (
					<KnownForTab keys={key} key={key} value={value} choosedTabs={choosedTabs} setChoosedTabs={setChoosedTabs} />
				))}
			</div>
			<div className='grid sm:grid-cols-2 gap-3'>
				<KnownForItem />
				<KnownForItem />
				<KnownForItem />
				<KnownForItem />
			</div>
		</div>
	)
}
