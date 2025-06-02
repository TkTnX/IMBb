"use client"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { BgTitle } from "./BgTitle"
import { cn } from "@/lib/utils"

type Props = {
	title: string
	subtitle?: string
	bgTitle?: string
	href?: string
	children: React.ReactNode
}

export const Section = ({
	title,
	subtitle,
	href,
	bgTitle,
	children
}: Props) => {
	return (
		<section
			className={cn(
				"container mt-5 sm:mt-8 lg:mt-16 xl:mt-32 relative ",
				{
					"pt-0 lg:pt-10 2xl:pt-20 ": bgTitle
				}
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

				<div className='flex items-center gap-1'>
					<button className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'>
						<ChevronLeft
							color='var(--dark-text-primary)'
							size={16}
						/>
					</button>
					<button className='w-10 h-10 flex items-center justify-center bg-background-light-transparent-100 rounded-full hover:bg-background-light-transparent-50 disabled:opacity-50 disabled:pointer-events-none'>
						<ChevronRight
							color='var(--dark-text-primary)'
							size={16}
						/>
					</button>
				</div>
			</div>

			{/* LIST */}
			{children}

			{bgTitle && <BgTitle text={bgTitle} />}
		</section>
	)
}
