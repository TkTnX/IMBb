import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { axiosInstance } from "@/configs/axios.config"
import { Review } from "@/generated/prisma"
import { useUserStore } from "@/stores/userStore"
import { ITmdbMovie } from "@/types/movie.interface"

export const useReviews = (movie: ITmdbMovie) => {
	const [openModal, setOpenModal] = useState(false)
	const router = useRouter()
	const { user, fetchUser } = useUserStore()
	const [isRated, setIsRated] = useState<null | Review>(null)
	const [rating, setRating] = useState<null | number>()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (user && user.reviews) {
			const findReview = user.reviews.find(
				r => r.movieTmdbId === movie.id
			)
			if (findReview) {
				setIsRated(findReview)
				setRating(findReview.rating)
			} else {
				setIsRated(null)
				setRating(null)
			}
		}
	}, [user, movie])

	const onSubmit = async (e: FormEvent) => {
		setLoading(true)
		try {
			if (!user) return router.push("/sign-in")
			e.preventDefault()

			if (!rating) return toast.error("Rating is required!")
			const formData = new FormData(e.target as HTMLFormElement)

			const content = formData.get("content")

			const body = {
				content,
				rating,
				movieTmdbId: movie.id,
				poster_path: movie.poster_path,
				movieTitle: movie.title,
				userClerkId: user.clerkId,
				userId: user.id
			}
			await axiosInstance.post(`/reviews`, body)
			setOpenModal(false)
			fetchUser(user.clerkId)
			return toast.success("Successful!")
		} catch (error) {
			console.log(error)
			return error instanceof AxiosError
				? toast.error(error.message)
				: toast.error("Something went wrong!")
		} finally {
			setLoading(false)
		}
	}

	const onRemoveReview = async (reviewId: number) => {
		setLoading(true)
		try {
			if (!user) return router.push("/sign-in")

			await axiosInstance.delete(`/reviews/${reviewId}`)
			setOpenModal(false)
			setIsRated(null)
			await fetchUser(user.clerkId)
			return toast.success("Successful!")
		} catch (error) {
			console.log(error)
			return error instanceof AxiosError
				? toast.error(error.message)
				: toast.error("Something went wrong!")
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		onSubmit,
		isRated,
		rating,
		setRating,
		openModal,
		setOpenModal,
		onRemoveReview
	}
}
