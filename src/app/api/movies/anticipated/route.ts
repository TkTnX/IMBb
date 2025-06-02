import axios from "axios"
import { NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET() {
	try {
		const res = await movieApi.get(
			`/movies/anticipated?extended=full,images`
		)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
