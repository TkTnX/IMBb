"use client"

import { ClerkLoading, SignedIn, SignedOut, useUser } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const UserButton = () => {
	const { user } = useUser()
	return (
		<div className=''>
			<ClerkLoading>
				<div className='flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex'>
					<Loader2 className='animate-spin' />
					<span className='self-end'>Loading</span>
				</div>
			</ClerkLoading>
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
					href='/profile'
					className='flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex'
				>
					<Image
						className='rounded-full'
						src={user?.imageUrl || "/images/icons/user.svg"}
						width={24}
						height={24}
						alt='User'
					/>
					<span className='self-end one-line'>
						{user?.firstName ||
							user?.emailAddresses[0].emailAddress.split("@")[0]}
					</span>
				</Link>
			</SignedIn>
		</div>
	)
}
