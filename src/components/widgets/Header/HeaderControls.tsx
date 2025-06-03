import { UserButton } from "@/components/features"
import Image from "next/image"
import Link from "next/link"

export const HeaderControls = () => {
	return (
		<div className='flex items-center gap-7'>
			<Link
				href='/watchlist'
				className='flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex'
			>
				<Image
					src='/images/icons/flag.svg'
					width={24}
					height={24}
					alt='Watchlist'
				/>
				<span className='self-end'>Watchlist</span>
			</Link>
			<UserButton />
		</div>
	)
}
