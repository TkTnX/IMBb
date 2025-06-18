import { NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const languages = await traktApi.get("/languages/movies")

		return NextResponse.json(languages.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
