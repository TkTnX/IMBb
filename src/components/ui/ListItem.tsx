import { List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { IList } from "@/types/list.interface"

type Props = {
	listItem: IList
}

export const ListItem = ({ listItem }: Props) => {
	// TODO: В будущем выводить какие-то другие изображения
	return (
		<div className='flex-1'>
			<div className='relative w-full h-[200px]'>
				<Image
					className='object-cover rounded-sm brightness-50'
					src={listItem.user.images.avatar.full}
					fill
					alt={listItem.name}
				/>
				<Link
					className='text-text-primary flex items-center gap-2 rounded-[45px] py-2 px-4 bg-background-transparent-600 hover:bg-background-light-transparent-100 absolute left-3.5 bottom-5'
					href={`/lists/${listItem.ids.slug}`}
				>
					<List />
					List
				</Link>
			</div>
			<h6 className='mt-2 text-text-primary'>{listItem.name}</h6>
			<Link
				className='text-main-yellow hover:opacity-80'
				href={`/lists/${listItem.ids.slug}`}
			>
				See more
			</Link>
		</div>
	)
}
