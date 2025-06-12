import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(req: NextRequest) {
	try {
		const page = req.nextUrl.searchParams.get("page") || "1"
		const limit = req.nextUrl.searchParams.get("limit") || "10"
		const type = req.nextUrl.searchParams.get("type")


		const res = await movieApi.get(
			`/movies/${type}?extended=full,images&limit=${limit}&page=${page}`
		)
		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
