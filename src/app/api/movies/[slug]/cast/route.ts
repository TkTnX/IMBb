import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const slug = (await params).slug

	try {
		const cast = await traktApi.get(
			`/movies/${slug}/people?extended=full,images`
		)

		return NextResponse.json(cast.data)
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
