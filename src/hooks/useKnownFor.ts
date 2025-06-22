import { AxiosError } from "axios"
import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { ICastPerson } from "@/types/cast.interface"
import { IMoviePeopleDetails } from "@/types/movie.interface"

export const useKnownFor = (id: string) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<null | string>(null)
	const [data, setData] = useState<null | IMoviePeopleDetails>(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const { data } = await axiosInstance.get(
					`/trakt/actors/person/${id}/movies`
				)

				setData(data)
			} catch (error) {
				console.log(error)
				error instanceof AxiosError
					? setError(error.message)
					: setError("Something went wrong")
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])

	const normalizedCast =
		Object.entries(data?.cast || {}).length > 0 ? { cast: data?.cast } : {}
	const normalizedCrew = data?.crew || {}

	const mergedData = {
		...normalizedCast,
		...normalizedCrew
	} as Record<string, ICastPerson[]>

	return {
		data: mergedData,
		error,
		loading
	}
}
