import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { FOOTER_LINKS, FOOTER_SOCIALS } from "@/constants/footer.constants"

export const Footer = () => {
	return (
		<footer className='mt-10 md:mt-[100px] lg:mt-[200px] bg-background-nav py-12'>
			<div className='container'>
				<div className='w-full flex justify-center'>
					<Link
						href='/sign-up'
						className='text-background-nav rounded-lg py-2.5 px-4 bg-main-yellow shadow-2xl hover:opacity-80 text-center'
					>
						Unlock the full IMDb experience — Sign up now
					</Link>
				</div>
				<div className='flex flex-col lg:flex-row items-center lg:items-start  justify-center mt-16  gap-4'>
					<div className='flex flex-wrap sm:flex-nowrap items-center   sm:items-start justify-between  gap-10 xl:gap-[100px] flex-1 lg:flex-auto w-full lg:w-auto'>
						{FOOTER_LINKS.map((link, index) => (
							<div key={index} className='flex flex-col gap-2'>
								{link.items.map(item => (
									<Link
										key={item.text}
										className='flex items-center gap-1 hover:text-white group'
										href={item.href}
									>
										{item.text}
										<ArrowUpRight
											size={24}
											className='group-hover:translate-x-1 group-hover:-translate-y-1'
										/>
									</Link>
								))}
							</div>
						))}
					</div>
					<div className='flex flex-col lg:h-[152px] justify-between flex-1 gap-4'>
						<div className='flex items-center gap-7 '>
							{FOOTER_SOCIALS.map(social => (
								<a
									className='group'
									href={social.href}
									key={social.name}
								>
									<Image
										className='group-hover:filter group-hover:brightness-200'
										width={30}
										height={30}
										src={social.icon}
										alt={social.name}
									/>
								</a>
							))}
						</div>
						<p className='text-xs text-text-secondary '>
							© 1990-2025 by IMBb.com, Inc.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
