import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma-client"

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const isRated = await prisma.review.findFirst({
			where: {
				userClerkId: body.userClerkId,
				movieTmdbId: body.movieTmdbId
			}
		})

		if (isRated) {
			await prisma.review.update({
				where: {
					id: isRated.id
				},
				data: body
			})
		} else {
			await prisma.review.create({
				data: body
			})
		}

		return NextResponse.json("OK")
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			error instanceof AxiosError
				? error.message
				: "Something went wrong!"
		)
	}
}
