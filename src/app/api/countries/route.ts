import { NextResponse } from "next/server";



import { traktApi } from "@/configs/axios.config";





export async function GET() {
	try {
		const countries = await traktApi.get("/countries/movies")

		return NextResponse.json(countries.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}