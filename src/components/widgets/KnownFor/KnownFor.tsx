"use client"

import { useEffect, useState } from "react"

import { KnownForItem } from "@/components/ui/KnownForItem"

import { axiosInstance } from "@/configs/axios.config"

export const KnownFor = ({ slug }: { slug: string }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosInstance.get(
					`/actors/person/${slug}/movies`
				)

				console.log(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	return (
		<div className='grid sm:grid-cols-2 gap-3'>
			<KnownForItem />
			<KnownForItem />
			<KnownForItem />
			<KnownForItem />
		</div>
	)
}
