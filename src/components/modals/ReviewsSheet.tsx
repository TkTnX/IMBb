"use client"

import { Plus, X } from "lucide-react"

import { useComments } from "@/hooks/useComments"

import { ReviewsControls } from "../features/ReviewsControls"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "../ui/sheet"
import { ReviewsList } from "../widgets"

type Props = {
	children: React.ReactNode
	slug: string
	movieInfo: { title: string; year: number }
	className?: string
}

export const ReviewsSheet = ({
	children,
	slug,
	movieInfo,
	className
}: Props) => {
	const { comments, open, setOpen, loadMore, loading, hasMore } =
		useComments(slug)

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className={className}>{children}</SheetTrigger>
			<SheetContent side='bottom' className='h-full border-t-0 pt-6 overflow-y-auto'>
				<div className='container flex flex-col vsm:flex-row items-start gap-6'>
					<button onClick={() => setOpen(false)}>
						<X size={18} />
					</button>
					<div className='flex-1'>
						<SheetHeader className=' p-0 border-b-2 border-b-background-light-transparent-100 !pb-6'>
							<div className='flex gap-2 sm:items-center justify-between flex-col sm:flex-row '>
								<div>
									<SheetTitle className='text-xl sm:text-2xl text-text-primary font-normal'>
										{movieInfo.title}{" "}
										<span className='text-xl text-text-secondary'>
											({movieInfo.year})
										</span>
									</SheetTitle>
									<h6 className='mt-4 text-lg sm:text-xl text-text-primary'>
										User Reviews
									</h6>
								</div>
								<button className='rounded-lg py-2.5 px-4 bg-main-yellow shadow-2xl text-black flex items-center gap-2.5 hover:opacity-80 w-fit'>
									Review this title <Plus />
								</button>
							</div>
							<div className='flex flex-col md:flex-row md:items-center gap-2 justify-between mt-8 '>
								<ReviewsControls />
								<p className='text-text-secondary'>
									1-{comments.length} reviews
								</p>
							</div>
						</SheetHeader>
						<ReviewsList
							hasMore={hasMore}
							loadMore={loadMore}
							loading={loading}
							comments={comments}
						/>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
