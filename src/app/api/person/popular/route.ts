import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(req: NextRequest) {
	try {
		const page = req.nextUrl.searchParams.get("page")
		const res = await tmdbApi.get("/person/popular", {
			params: { page }
		})

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ message: error.message, code: error.status })
			: NextResponse.json({ message: "Something went wrong", code: 500 })
	}
}
