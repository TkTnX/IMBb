"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { SwiperButtons } from "../features"

import { BgTitle } from "./BgTitle"
import { cn } from "@/lib/utils"

type Props = {
	title: string
	subtitle?: string
	href?: string
	bgTitle?: string
	children: React.ReactNode
	section?: string
	className?: string
	id?: string
}

export const Section = ({
	title,
	subtitle,
	href,
	bgTitle,
	children,
	section,
	className,
	id,
}: Props) => {
	return (
		<section
			id={id}
			className={cn(
				" mt-5 sm:mt-8 lg:mt-16 xl:mt-32 relative ",
				{
					"pt-0 lg:pt-10 2xl:pt-20 ": bgTitle
				},
				className
			)}
		>
			{/* TOP */}
			<div className='flex items-center justify-between'>
				<div>
					<div className='flex items-center gap-2'>
						<div className='w-1 h-1 bg-main-yellow rounded-full' />
						{href ? (
							<Link
								className='text-2xl text-text-primary flex items-center gap-2 hover:text-background-transparent-600 group'
								href={href}
							>
								{title}
								<ArrowRight className='group-hover:translate-x-2' />
							</Link>
						) : (
							<h4 className='text-2xl text-text-primary'>
								{title}
							</h4>
						)}
					</div>
					{subtitle && (
						<p className='mt-1 text-text-secondary text-left'>
							{subtitle}
						</p>
					)}
				</div>

				{section && <SwiperButtons section={section} />}
			</div>

			{/* LIST */}
			{children}

			{bgTitle && <BgTitle text={bgTitle} />}
		</section>
	)
}
