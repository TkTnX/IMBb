"use client"

import { useClerk } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Skeleton } from "@/components/ui/skeleton"

import { useUserStore } from "@/stores/userStore"

type Props = {
	title?: string
	desc?: string
}

export const UserPageTop = ({ title, desc }: Props) => {
	const { signOut } = useClerk()
	const { user, loading } = useUserStore()
	const pathname = usePathname()
	const isUserPage = pathname === "/user"
	return (
		<div className='min-h-[150px] md:h-[200px] flex flex-col justify-center text-black'>
			<div className='flex items-center gap-2 relative'>
				{isUserPage ? (
					loading ? (
						<Skeleton className='md:w-[140px] md:h-[140px] w-[90px] h-[90px] rounded-full' />
					) : (
						<Image
							alt={user?.username || "User"}
							className='rounded-full md:w-[140px] md:h-[140px] w-[90px] h-[90px]'
							src={user?.image || "/images/no-avatar.jpg"}
							width={140}
							height={140}
						/>
					)
				) : (
					""
				)}

				<div>
					<h2 className='text-4xl md:text-8xl  font-bold'>
						{isUserPage ? (
							loading ? (
								<Skeleton className='w-[300px] h-24' />
							) : (
								user?.username
							)
						) : (
							title
						)}{" "}
					</h2>
					<div className='text-xs sm:text-base font-semibold'>
						{isUserPage ? (
							loading ? (
								<Skeleton className='w-[100px] h-7 mt-2' />
							) : (
								`Joined: ${new Date(user?.createdAt!).toDateString()}`
							)
						) : (
							desc
						)}
					</div>
					{isUserPage && (
						<Link
							href={"/user/edit"}
							className='bg-background-secondary/90 text-main-blue px-4 py-2 rounded-md w-fit hover:opacity-90 mt-3 block'
						>
							Edit profile
						</Link>
					)}
				</div>
				<button
					onClick={() => signOut({ redirectUrl: "/sign-in" })}
					className='bg-background-secondary/90 text-main-blue px-4 py-2 rounded-md w-fit hover:opacity-90 mt-3 absolute top-3 right-3'
				>
					Log out
				</button>
			</div>
			<div className='h-[150px] md:h-[200px] w-full bg-main-yellow absolute left-0 right-0 top-[72px] -z-10' />
		</div>
	)
}
