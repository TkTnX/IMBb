import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		const page = req.nextUrl.searchParams.get("page") || "1"
		const limit = req.nextUrl.searchParams.get("limit") || "10"
		const type = req.nextUrl.searchParams.get("type")

		const filters = Object.fromEntries(
			["genres", "years", "languages", "countries", "query"]
				.map(key => [key, searchParams.get(key)])
				.filter(([, value]) => value !== null && value !== "")
		)

		const query = new URLSearchParams({
			extended: "full,images",
			limit,
			page,
			...filters
		})

		const res = await movieApi.get(`/movies/${type}?${query.toString()}`)
		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
