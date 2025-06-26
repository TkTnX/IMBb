import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma-client"

export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ clerkId: string }> }
) {
	try {
		const clerkId = (await params).clerkId
console.log(clerkId)
		const user = await prisma.user.findFirst({
			where: {
				clerkId
			}
		})

		if (!user)
			return NextResponse.json({ error: "User not found", status: 404 })

		const data = await req.json()

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				...data
			}
		})

		return NextResponse.json({
			message: "User updated successfully",
			status: 200
		})
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			error instanceof AxiosError
				? { error: error.message, status: error.status }
				: { error: "Something went wrong", status: 500 }
		)
	}
}
