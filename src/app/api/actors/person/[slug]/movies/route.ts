import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const slug = (await params).slug
		const { data } = await movieApi.get(
			`/people/${slug}/movies?extended=full,images`
		)
		return NextResponse.json(data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
