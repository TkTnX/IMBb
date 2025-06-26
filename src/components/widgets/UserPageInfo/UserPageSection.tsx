import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { UserPageSectionItem } from "@/components/ui/UserPageSectionItem"
import { Skeleton } from "@/components/ui/skeleton"

import { Review, WatchlistMovie } from "@/generated/prisma"
import { useUserStore } from "@/stores/userStore"

type Props = {
	title: string
	link: string
	desc: string
	items: Review[] | WatchlistMovie[]
}

export const UserPageSection = ({ title, link, desc, items }: Props) => {
	const { loading } = useUserStore()
	return (
		<section className='mt-10'>
			<Link
				href={link}
				className='flex items-center gap-3 border-l-2 border-main-yellow pl-3 group'
			>
				<h3 className='text-3xl font-bold'>{title}</h3>
				<span className='text-xs text-text-secondary'>
					{items.length}
				</span>
				<ChevronRight
					className='group-hover:stroke-main-yellow'
					strokeWidth={3}
				/>
			</Link>
			<p className='mt-3 text-text-secondary'>{desc}</p>

			<div className='mt-5 grid grid-cols-2 vsm:grid-cols-3 sm:grid-cols-4 items-stretch gap-4'>
				{loading
					? [...new Array(4)].map((_, index) => (
							<Skeleton
								className='w-full h-[308px]'
								key={index}
							/>
						))
					: items.map(item => (
							<UserPageSectionItem movie={item} key={item.id} />
						))}
			</div>
		</section>
	)
}
