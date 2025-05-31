import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const res = await axios.get(
			"https://api.trakt.tv/calendars/all/movies/2020-09-01/7",
			{
				headers: {
					"Content-Type": "application/json",
					"trakt-api-key": process.env.TRAKT_CLIENT_ID
				}
			}
		)
		console.log(res)
		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
