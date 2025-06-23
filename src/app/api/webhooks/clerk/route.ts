import { WebhookEvent } from "@clerk/nextjs/server"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { Webhook } from "svix"

import { prisma } from "@/lib/prisma-client"

export async function POST(req: NextRequest) {
	const secret = process.env.CLERK_WH_SECRET
	if (!secret)
		return NextResponse.json({ message: "Missing secret", status: 500 })

	const wh = new Webhook(secret)
	const body = await req.text()
	const headerPayload = await headers()

	const event = wh.verify(body, {
		"svix-id": headerPayload.get("svix-id")!,
		"svix-timestamp": headerPayload.get("svix-timestamp")!,
		"svix-signature": headerPayload.get("svix-signature")!
	}) as WebhookEvent

	if (event.type === "user.created") {
		const { email_addresses, first_name, id, username, image_url } =
			event.data

		const user = await prisma.user.create({
			data: {
				clerkId: id,
				email: email_addresses[0].email_address,
				username:
					username ||
					first_name ||
					email_addresses[0].email_address.split("@")[0],
				image: image_url
			}
		})

		await prisma.watchList.create({
			data: {
				user_id: user.id,
				userClerkId: id
			}
		})
	}

	if (event.type === "user.deleted") {
		await prisma.user.deleteMany({
			where: {
				clerkId: event.data.id
			}
		})
	}

	return NextResponse.json("OK")
}
