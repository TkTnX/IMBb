import { Info, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AddToWishlistButton } from "../features"

import { IBoxOfficeItem } from "@/types/movie.interface"
import { formatPrice } from "@/helpers/formatPrice"

type Props = {
	item: IBoxOfficeItem
	number: number
}

export const BoxOfficeItem = ({ item, number }: Props) => {
	return (
		<div className='flex-1 flex flex-col vsm:flex-row items-start gap-2 lg:gap-5 bg-[#151515] rounded-xl p-2 lg:p-5'>
			<div className='flex flex-col vsm:flex-row items-center gap-0.5 vsm:gap-2.5'>
				<p className='text-2xl lg:text-3xl'>{number}</p>
				<div className='rounded-2xl w-10 vsm:w-1 h-1 vsm:h-10 bg-main-yellow' />
			</div>
			<div className="flex items-start gap-5 flex-1 w-full">
				<div className='relative min-w-[126px] min-h-[194px]'>
					<Image
						src={`https://${item.movie.images.poster[0]}`}
						alt={item.movie.title}
						fill
						className='rounded-sm object-cover w-full h-full'
					/>
					<AddToWishlistButton className='left-3' />
				</div>
				<div>
					<h5 className='text-base lg:text-lg font-bold'>{item.movie.title}</h5>
					<p className='text-lg lg:text-xl text-text-secondary mt-1 lg:mt-3.5'>
						{formatPrice(item.revenue)}
					</p>
					<div className='flex items-center  gap-2 xl:gap-4 mt-1 lg:mt-3.5 flex-wrap'>
						<div className='flex items-center gap-1 text-lg'>
							<Star
								fill='var(--color-main-yellow)'
                                color='var(--color-main-yellow)'
                                size={20}
							/>
							<p>{item.movie.rating.toFixed(1)}</p>
						</div>
						<button className='hover:opacity-80 flex items-center gap-1'>
							<Star size={20} />
							Rate
						</button>
						<Link
							className='hover:opacity-80'
							href={`/movies/${item.movie.ids.slug}`}
						>
							<Info size={20} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
