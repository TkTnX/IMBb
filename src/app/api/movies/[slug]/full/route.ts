import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const slug = (await params).slug

	try {
		const [movieRes, castRes, commentsRes] =
			await Promise.all([
				movieApi.get(`/movies/${slug}?extended=full,images`),
				movieApi.get(`/movies/${slug}/people?extended=full,images`),
				movieApi.get(`/movies/${slug}/comments?sortBy=newest&limit=2`),
			])

		return NextResponse.json({
			movie: movieRes.data,
			cast: castRes.data,
			comments: commentsRes.data,
		})
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
