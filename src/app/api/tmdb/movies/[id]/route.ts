import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id
		const { data } = await tmdbApi.get(`/movie/${id}`)
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
