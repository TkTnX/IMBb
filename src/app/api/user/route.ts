import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma-client"

export async function GET(req: NextRequest) {
	try {
		const clerkId = req.nextUrl.searchParams.get("clerkId")

		if (!clerkId) return
		const dbUser = await prisma.user.findFirst({
			where: {
				clerkId
			},
			include: {
				watchList: {
					include: {
						movies: true
					}
				},
				reviews: true
			}
		})

		return NextResponse.json(dbUser)
	} catch (error) {
		console.log(error)
		return error instanceof AxiosError
			? NextResponse.json({ message: error.message, code: error.code })
			: NextResponse.json({ message: "Something went wrong", code: 500 })
	}
}
