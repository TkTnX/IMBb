import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { tmdbApi } from "@/configs/axios.config"

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id
		const { data: person } = await tmdbApi.get(`/person/${id}`)
		if (!person)
			return NextResponse.json({
				message: "Person not found",
				status: 404
			})

		return NextResponse.json(person)
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
