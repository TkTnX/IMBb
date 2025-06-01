import { NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const res = await movieApi.get(
			"/lists/trending?extended=images&limit=6"
		)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
