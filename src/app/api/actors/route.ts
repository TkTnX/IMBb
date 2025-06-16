import { NextResponse } from "next/server"

import { traktApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const res = await traktApi.get("/people/updates?extended=full,images")

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
