import Image from "next/image"
import Link from "next/link"

import { HeaderMenu } from "@/components/modals"

import { HEADER_NAV } from "@/constants/header.constants"

import { HeaderControls } from "./HeaderControls"
import { HeaderSearch } from "./HeaderSearch"

export const Header = () => {
	return (
		<header className='bg-background-nav py-4 '>
			<div className='container flex items-center gap-3 md:gap-7 w-full '>
				{/* NAVIGATION */}
				<div className='flex sm:flex-row-reverse md:flex-row items-center gap-3 xl:gap-7 flex-1 sm:flex-initial'>
					<Link href='/'>
						<Image
							src='/images/icons/imbb.svg'
							width={60}
							height={30}
							alt='IMBb '
						/>
					</Link>
					<nav className='-order-1 sm:order-1'>
						<ul className=' hidden xl:flex items-center gap-5'>
							{HEADER_NAV.map(item => (
								<li key={item.href}>
									<Link
										className='hover:opacity-80 transition'
										href={item.href}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<HeaderMenu />
					</nav>
				</div>
				<HeaderSearch />
				<HeaderControls />
			</div>
		</header>
	)
}
