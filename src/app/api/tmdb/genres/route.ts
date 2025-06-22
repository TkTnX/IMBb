import { NextResponse } from "next/server";



import { tmdbApi } from "@/configs/axios.config";





export async function GET() {
	try {
		const genres = await tmdbApi.get("/genre/movie/list?language=en")
		return NextResponse.json(genres.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}