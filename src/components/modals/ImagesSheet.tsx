"use client"

import { X } from "lucide-react"
import { useState } from "react"

import { Img } from "../ui/Img"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

import { IMovieImages } from "@/types/image.interface"

type Props = {
	children: React.ReactNode
	images: IMovieImages | null
}

export const ImagesSheet = ({ children, images }: Props) => {
	const [open, setOpen] = useState(false)
	if (!images) return null
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent
				side='bottom'
				className='h-full overflow-x-hidden overflow-y-auto border-t-0 pt-6'
			>
				<div className='container'>
					<button onClick={() => setOpen(false)}>
						<X size={18} />
					</button>
					<SheetTitle className='text-white text-6xl'>
						Movie photos
					</SheetTitle>

					<div>
						{Object.entries(images).map(([key, value]) =>
							value && Array.isArray(value) && key !== "logos" ? (
								<div key={key} className='mt-10'>
									<h6 className='text-4xl font-bold text-white capitalize'>
										{key}
									</h6>
									<div className='flex flex-wrap gap-4 mt-2'>
										{value.map((img, index) => (
											<Img
												alt={"movie image"}
												key={index}
												src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/${key === "backdrops" ? "w300" : key === "logos" ? "w92" : "w342"}${img.file_path}`}
												width={
													key === "backdrops"
														? 300
														: key === "logos"
															? 92
															: 342
												}
												height={300}
												className='object-cover'
											/>
										))}
									</div>
								</div>
							) : null
						)}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
