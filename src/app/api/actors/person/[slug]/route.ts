import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const slug = (await params).slug

		const { data: person } = await movieApi.get(
			`/people/${slug}?extended=full,images`
		)

		return NextResponse.json(person)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
