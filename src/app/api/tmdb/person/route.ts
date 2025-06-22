import { AxiosError } from "axios"
import { NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const res = await tmdbApi.get(`/person/popular`, {
			params: { page: 1 }
		})

		if (res.status !== 200) {
			throw new Error()
		}

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ message: error.message, code: error.code })
			: NextResponse.json({ message: "Something went wrong", code: 500 })
	}
}
