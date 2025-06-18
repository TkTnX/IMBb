import { NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const { data } = await traktApi.get(
			"/movies/boxoffice?extended=full,images"
		)
		return NextResponse.json(data.splice(0, 6))
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
