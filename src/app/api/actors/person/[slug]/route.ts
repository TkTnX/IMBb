import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"
import { AxiosError } from "axios"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const slug = (await params).slug

		const { data: person } = await movieApi.get(
			`/people/${slug}?extended=full,images`
		)
		if (!person)
			return NextResponse.json({
				message: "Person not found",
				status: 404
			})

		return NextResponse.json(person)
	} catch (error) {
		console.log(error)
		if(error instanceof AxiosError) return NextResponse.json({ error: error.message, status: error.status })
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
