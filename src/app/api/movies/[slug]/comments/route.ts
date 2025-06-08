import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string; sortBy: string }> }
) {
	try {
		const slug = (await params).slug
		const sortBy = req.nextUrl.searchParams.get("sortBy")
		const limit = req.nextUrl.searchParams.get("limit")
		const page = req.nextUrl.searchParams.get("page")
		const { data } = await movieApi.get(
			`/movies/${slug}/comments/${sortBy}?extended=full,images&limit=${limit}&page=${page}`
		)

		if (!data)
			return NextResponse.json({
				message: "Comments not found",
				status: 404
			})

		return NextResponse.json(data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({
			message: "Something went wrong",
			status: 500
		})
	}
}
