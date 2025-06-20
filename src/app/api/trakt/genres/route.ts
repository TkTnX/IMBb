import { NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const genres = await traktApi.get("/genres/movies")
		return NextResponse.json(genres.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
