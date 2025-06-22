import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"

export const useSearch = () => {
	const searchParams = useSearchParams()

	const type = searchParams.get("type")
	const q = searchParams.get("q")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<null | string>(null)
	const [results, setResults] = useState<null | any[]>(null)
	const [page, setPage] = useState(1)

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true)
				setError(null)

				const res = await axiosInstance.get("/tmdb/search", {
					params: {
						type,
						q,
						page
					}
				})
				console.log(res.data)
				if (res.data.code === 404) return setError("Nothing is found!")

				setResults(res.data.results)
			} catch (error) {
				console.log(error)
				setError(
					error instanceof Error
						? error.message
						: "Something went wrong"
				)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [page, searchParams])

	return {
		loading,
		error,
        results,
        type
	}
}
