import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id

		const { data } = await tmdbApi.get(`/movie/${id}/images`, {
			params: { include_image_language: "en" }
		})

		return NextResponse.json(data)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ error: error.message, code: error.code })
			: NextResponse.json({ error: "Something went wrong!", code: "500" })
	}
}
