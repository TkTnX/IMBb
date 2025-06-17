import { Dot } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ICastPerson, ICrewPerson } from "@/types/cast.interface"

type Props = {
	title: string
	items: ICastPerson[] | ICrewPerson[] | string[] | Record<string, string>[]
}

export const MovieInfoItem = ({ title, items }: Props) => {
	return (
		<div className='flex flex-col sm:flex-row items-start gap-2'>
			<p className='font-bold text-lg text-text-secondary sm:min-w-[100px]'>
				{title}
			</p>
			<div className='flex items-center sm:gap-1 flex-wrap'>
				{items?.map((item, index) => (
					<div key={index} className='flex items-center sm:gap-1'>
						{typeof item !== "string" ? (
							<Link
								href={`/person/${item?.id}`}
								className='text-main-yellow-sec-dark hover:opacity-80 text-sm'
							>
								{item?.name}
							</Link>
						) : (
							<p
								className={cn("", {
									"uppercase text-main-yellow-sec-dark text-sm":
										items.length !== 1
								})}
							>
								{item}
							</p>
						)}
						{index < items.length - 1 && <Dot />}
					</div>
				))}
			</div>
		</div>
	)
}
