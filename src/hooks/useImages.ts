import { AxiosError } from "axios"
import { useEffect, useState } from "react"

import { axiosInstance } from "@/configs/axios.config"
import { IMovieImages } from "@/types/image.interface"

export const useImages = (id: number) => {
	const [images, setImages] = useState<IMovieImages | null>(null)
	const [error, setError] = useState<null | string>(null)
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		async function fetchImages() {
			setLoading(true)
			setError(null)
			try {
				const { data } = await axiosInstance.get(`/tmdb/movies/${id}/images`)

				setImages(data)
			} catch (error) {
				console.log(error)
				return error instanceof AxiosError
					? setError(error.message)
					: setError("Something went wrong!")
			} finally {
				setLoading(false)
			}
		}
		fetchImages()
	}, [])

	return {
		images,
		loading,
		error
	}
}
