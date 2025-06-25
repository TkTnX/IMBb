import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma-client"
import { revalidatePath } from "next/cache"

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id

		const res = await prisma.review.delete({
			where: {
				id: Number(id)
			}
		})

        revalidatePath("/user/reviews")
		return NextResponse.json(res)
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			error instanceof AxiosError
				? error.message
				: "Something went wrong!"
		)
	}
}
