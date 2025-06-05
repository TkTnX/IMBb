import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const slug = (await params).slug
		const { data } = await movieApi.get(
			`/movies/${slug}?extended=full,images`
		)

		if (!data)
			return NextResponse.json({
				message: "Movie not found",
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
