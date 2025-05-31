import axios from "axios"
import { NextResponse } from "next/server"


export async function GET() {
	try {
		const res = await axios.get(
			"https://api.trakt.tv/movies/anticipated?extended=full,images&limit=3",
			{
				headers: {
					"Content-Type": "application/json",
					"trakt-api-key": process.env.TRAKT_CLIENT_ID
				}
			}
		)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Something went wrong", status: 500 })
	}
}
