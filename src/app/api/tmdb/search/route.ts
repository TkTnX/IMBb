import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(req: NextRequest) {
	try {
		const query = req.nextUrl.searchParams.get("q")
		const type = req.nextUrl.searchParams.get("type")
		const page = req.nextUrl.searchParams.get("page") || "1"
		const res = await tmdbApi.get(`/search/${type}`, {
			params: {
				query,
				page
			}
		})
		if (res.status === 404)
			return NextResponse.json({ message: "Not found", code: 404 })

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ message: error.message, code: error.status })
			: NextResponse.json({ message: "Something went wrong", code: 500 })
	}
}
