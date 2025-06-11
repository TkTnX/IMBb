import { NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const languages = await movieApi.get("/languages/movies")

		return NextResponse.json(languages.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
