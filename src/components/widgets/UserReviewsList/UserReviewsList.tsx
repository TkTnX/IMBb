"use server"

import { auth } from "@clerk/nextjs/server"

import { UserReviewsListItem } from "@/components/ui/UserReviewsListItem"

import { Review } from "@/generated/prisma"
import { prisma } from "@/lib/prisma-client"

async function getReviewsList(userId: string): Promise<Review[]> {
	try {
		const res = await prisma.review.findMany({
			where: {
				userClerkId: userId
			}
		})
		return res
	} catch (error) {
		console.log(error)
		return []
	}
}

export const UserReviewsList = async () => {
	const { userId } = await auth()
	const reviews = await getReviewsList(userId!)
	if (!reviews)
		return (
			<p className='my-10 text-center text-red-500 font-bold flex-1 w-full'>
				Something went wrong!
			</p>
		)

	if (Array.isArray(reviews) && reviews.length === 0)
		return <p className='flex-1'>You haven't written any reviews yet</p>
	return (
		<div className='flex-1 '>
			<p>{reviews.length} title</p>
			<div className='flex flex-col gap-4 mt-10'>
				{reviews.map(review => (
					<UserReviewsListItem key={review.id} review={review} />
				))}
			</div>
		</div>
	)
}
