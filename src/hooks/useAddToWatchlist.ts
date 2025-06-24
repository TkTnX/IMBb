import { useUser } from "@clerk/nextjs"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import { axiosInstance } from "@/configs/axios.config"
import { useUserStore } from "@/stores/userStore"

export const useAddToWatchlist = (isAdded?: boolean) => {
	const [added, setAdded] = useState(isAdded)
	const [loading, setLoading] = useState(false)
	const { user } = useUser()
	const fetchUser = useUserStore(state => state.fetchUser)
	const router = useRouter()

	const onClick = async (movieId: number) => {
		setLoading(true)
		try {
			if (!user) return router.push("/sign-in")

			const res = await axiosInstance.post("/watchlist", {
				movieId,
				userClerkId: user.id
			})


			if (res.data.code) return toast.error(res.data.message)
			router.refresh()
			setAdded(res.data.isAdded)
			fetchUser(user.id)

			return toast.success("Successful!")
		} catch (error) {
			console.log(error)
			return toast.error(
				error instanceof AxiosError
					? error.message
					: "Something went wrong!"
			)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		setAdded(isAdded)
	}, [isAdded])

	return {
		added,
		onClick,
		loading
	}
}
