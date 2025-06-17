import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id
		const page = req.nextUrl.searchParams.get("page")
		const { data } = await tmdbApi.get(`/movie/${id}/reviews`, {
			params: { page }
		})

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
