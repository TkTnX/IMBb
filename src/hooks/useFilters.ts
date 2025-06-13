import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export const useFilters = () => {
	const searchParams = useSearchParams()
	const genresFromUrl = searchParams.get("genres")?.split(",") || []
	const [selectedGenres, setSelectedGenres] =
		useState<string[]>(genresFromUrl)
	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
	const [selectedCountries, setSelectedCountries] = useState<string[]>([])
	const router = useRouter()

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			if (params.get(name) === value) return
			params.set(name, value)
			router.push(`?${params.toString()}`)

			return params.toString()
		},
		[searchParams]
	)

	const removeQueryString = (name: string) => {
		const params = new URLSearchParams(searchParams.toString())
		if (!params.has(name)) return
		params.delete(name)
		router.push(`?${params.toString()}`)
	}

	useEffect(() => {
		if (selectedGenres.length === 0) return removeQueryString("genres")
		createQueryString("genres", selectedGenres.join(","))
	}, [selectedGenres])

	useEffect(() => {
		if (selectedLanguages.length === 0)
			return removeQueryString("languages")
		createQueryString("languages", selectedLanguages.join(","))
	}, [selectedLanguages])
	useEffect(() => {
		if (selectedCountries.length === 0)
			return removeQueryString("countries")
		createQueryString("countries", selectedCountries.join(","))
	}, [selectedCountries])

	return {
		createQueryString,
		selectedGenres,
		setSelectedGenres,
		setSelectedLanguages,
		setSelectedCountries
	}
}
