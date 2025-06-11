import { NextResponse } from "next/server";



import { movieApi } from "@/configs/axios.config";





export async function GET() {
	try {
		const countries = await movieApi.get("/countries/movies")

		return NextResponse.json(countries.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}