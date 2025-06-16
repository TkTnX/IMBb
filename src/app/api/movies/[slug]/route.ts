import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const slug = (await params).slug
		const { data } = await traktApi.get(
			`/movies/${slug}?extended=full,images`
		)
		if (!data || data.status === 404)
			return NextResponse.json({
				message: "Movie not found",
				code: 404
			})

		return NextResponse.json(data)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ message: error.message, code: error.status })
			: NextResponse.json({
					message: "Something went wrong",
					code: 500
				})
	}
}
