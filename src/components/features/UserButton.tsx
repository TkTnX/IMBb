"use client"

import { ClerkLoading, SignedIn, SignedOut, useUser } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import { useUserStore } from "@/stores/userStore"

export const UserButton = () => {
	const { user, fetchUser, loading } = useUserStore()
	const { user: clerkUser } = useUser()
	useEffect(() => {
		if (clerkUser) fetchUser(clerkUser.id)
	}, [clerkUser])

	return (
		<div className=''>
			{loading ? (
				<div className='flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex'>
					<Loader2 className='animate-spin' />
					<span className='self-end'>Loading</span>
				</div>
			) : (
				<>
					{" "}
					<SignedOut>
						<Link
							href='/sign-in'
							className='flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex'
						>
							<Image
								src='/images/icons/user.svg'
								width={24}
								height={24}
								alt='User'
							/>
							<span className='self-end'>Sign in</span>
						</Link>
					</SignedOut>
					<SignedIn>
						<Link
							href='/user'
							className='flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex'
						>
							<Image
								className='rounded-full'
								src={user?.image || "/images/icons/user.svg"}
								width={24}
								height={24}
								alt='User'
							/>
							<span className='self-end one-line'>
								{user?.username}
							</span>
						</Link>
					</SignedIn>
				</>
			)}
		</div>
	)
}
