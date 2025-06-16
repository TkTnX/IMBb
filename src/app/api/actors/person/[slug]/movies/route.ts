import { NextRequest, NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const slug = (await params).slug
		const { data } = await traktApi.get(
			`/people/${slug}/movies?extended=full,images`
		)
		return NextResponse.json(data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
