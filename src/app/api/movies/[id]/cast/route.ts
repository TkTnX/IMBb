import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const id = (await params).id

	try {
		const credits = await tmdbApi.get(`/movie/${id}/credits`)
		console.log(credits)
		return NextResponse.json(credits.data)
	} catch (error) {
		console.log(error)
		if (error instanceof AxiosError)
			return NextResponse.json({
				error: error.message,
				status: error.status
			})
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
