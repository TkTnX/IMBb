import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

// todo: получение данных с бд
export async function GET() {
	try {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/authentication",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`
			}
		}

		axios
			.request(options)
			.then(res => console.log(res.data))
			.catch(err => console.error(err))

		return NextResponse.json({ status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error, status: 500 })
	}
}
