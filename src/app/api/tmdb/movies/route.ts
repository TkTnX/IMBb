import { NextRequest, NextResponse } from "next/server";



import { tmdbApi, traktApi } from "@/configs/axios.config";





export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		const page = req.nextUrl.searchParams.get("page") || "1"

		const filters = Object.fromEntries(
			[
				"with_genres",
				"primary_release_year",
				"with_original_language",
				"countries",
				"query"
			]
				.map(key => [key, searchParams.get(key)])
				.filter(([, value]) => value !== null && value !== "")
		)

		const query = new URLSearchParams({
			page,
			...filters
		})

		const res = await tmdbApi.get(`/discover/movie`, {
			params: query
		})

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({
			message: "Something went wrong",
			status: 500
		})
	}
}