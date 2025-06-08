"use client"

import { Plus, X } from "lucide-react"
import { useEffect, useState } from "react"

import { ReviewsControls } from "../features/ReviewsControls"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "../ui/sheet"
import { ReviewsList } from "../widgets"

import { axiosInstance } from "@/configs/axios.config"
import { IComment } from "@/types/comment.interface"

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
	const [open, setOpen] = useState(false)
	const [comments, setComments] = useState<IComment[]>([])

	useEffect(() => {
		if (open) {
			const fetchComments = async () => {
				const { data } = await axiosInstance.get(
					`/movies/${slug}/comments?sortBy=newest`
				)
				setComments(data)
			}

			fetchComments()
		}
	}, [open])

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className={className}>{children}</SheetTrigger>
			<SheetContent side='bottom' className='h-full border-t-0 pt-6'>
				<div className='container flex items-start gap-6'>
					<button onClick={() => setOpen(false)}>
						<X size={18} />
					</button>
					<div className='flex-1'>
						<SheetHeader className=' p-0 border-b-2 border-b-background-light-transparent-100 !pb-6'>
							<div className='flex items-center justify-between'>
								<div>
									<SheetTitle className='text-2xl text-text-primary font-normal'>
										{movieInfo.title}{" "}
										<span className='text-xl text-text-secondary'>
											({movieInfo.year})
										</span>
									</SheetTitle>
									<h6 className='mt-4 text-xl text-text-primary'>
										User Reviews
									</h6>
								</div>
								<button className='rounded-lg py-2.5 px-4 bg-main-yellow shadow-2xl text-black flex items-center gap-2.5 hover:opacity-80'>
									Review this title <Plus />
								</button>
							</div>
							<div className='flex items-center justify-between mt-8 '>
								<ReviewsControls />
								<p className='text-text-secondary'>
									1-{comments.length} reviews
								</p>
							</div>
						</SheetHeader>
						<ReviewsList comments={comments} />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
