"use client"

import { useUser } from "@clerk/nextjs"
import { AxiosError } from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import { axiosInstance } from "@/configs/axios.config"
import { cn } from "@/lib/utils"

type Props = {
	className?: string
	isAdded?: boolean
	movieId: number
}

export const AddToWatchlistButton = ({
	className,
	isAdded,
	movieId
}: Props) => {
	const { user } = useUser()
	const router = useRouter()

	const onClick = async () => {
		try {
			if (!user) return router.push("/sign-in")

			const res = await axiosInstance.post("/watchlist", {
				movieId,
				userClerkId: user.id
			})

			if (res.data.code === 500) return toast.error(res.data.message)
			router.refresh()
			return toast.success("Successful!")
		} catch (error) {
			console.log(error)
			return toast.error(
				error instanceof AxiosError
					? error.message
					: "Something went wrong!"
			)
		}
	}

	return (
		<button
			onClick={onClick}
			className={cn("absolute top-0  hover:opacity-80 z-20", className)}
		>
			{isAdded ? (
				<Image
					width={39}
					height={50}
					src={"/images/icons/bookmark-checked.svg"}
					alt='add to wishlist'
				/>
			) : (
				<Image
					width={39}
					height={50}
					src={"/images/icons/bookmark-plus.svg"}
					alt='add to wishlist'
				/>
			)}
		</button>
	)
}
