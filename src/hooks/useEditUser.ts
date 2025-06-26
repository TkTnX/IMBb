import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"

import { axiosInstance } from "@/configs/axios.config"
import { connectToDb } from "@/lib/supabase"
import { useUserStore } from "@/stores/userStore"

export const useEditUser = () => {
	const { user, fetchUser } = useUserStore()
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const [openEdit, setOpenEdit] = useState<null | string>(null)

	const onClickOpen = (type: string) => {
		if (openEdit === type) {
			setOpenEdit(null)
		} else {
			setOpenEdit(type)
		}
	}

	const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoading(true)
		try {
			if (!user) return router.push("/sign-in")
			const supabase = connectToDb()

			const { data, error } = await supabase.storage
				.from("images")
				.upload(
					`${new Date().getMilliseconds()}-${user.id}`,
					e.target.files![0]
				)

			if (error) throw error

			const url = await supabase.storage
				.from("images")
				.getPublicUrl(data.path).data.publicUrl

			const res = await axiosInstance.patch(`/user/${user?.clerkId}`, {
				image: url
			})

			if (res.data.status === 200) {
				toast.success("Profile updated successfully")
				fetchUser(user?.clerkId)
				setOpenEdit(null)
				router.refresh()
			}
		} catch (error) {
			console.log(error)
			return toast.error(
				error instanceof AxiosError
					? error.message
					: "Something went wrong"
			)
		} finally {
			setLoading(false)
		}
	}
	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setLoading(true)
		try {
			if (!user) return router.push("/sign-in")
			const formData = new FormData(e.target as HTMLFormElement)

			const updatedValue = formData.get(openEdit as string)

			const res = await axiosInstance.patch(`/user/${user?.clerkId}`, {
				[openEdit as string]: updatedValue
			})

			console.log(res)
			if (res.data.status === 200) {
				toast.success("Profile updated successfully")
				fetchUser(user?.clerkId)
				setOpenEdit(null)
				router.refresh()
			}
		} catch (error) {
			console.log(error)
			return toast.error(
				error instanceof AxiosError
					? error.message
					: "Something went wrong"
			)
		} finally {
			setLoading(false)
		}
	}

	return {
		onSubmit,
		openEdit,
		onClickOpen,
		onImageChange,
		user,
		loading
	}
}
