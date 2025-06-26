import { create } from "zustand"

import { axiosInstance } from "@/configs/axios.config"
import { IUser } from "@/types/user.interface"

interface UserStore {
	user: null | IUser
	loading: boolean
	setUser: (user: null | IUser) => void

	fetchUser: (clerkId: string) => Promise<void>
}

export const useUserStore = create<UserStore>((set, get) => ({
	user: null,
	loading: true,
	setUser: user => set({ user }),

	async fetchUser(clerkId) {
		set({ loading: true })
		if (!clerkId) return

		const { data } = await axiosInstance.get(`/user`, {
			params: { clerkId }
		})
		if (!data) return

		set({ user: data, loading: false })
	}
}))
