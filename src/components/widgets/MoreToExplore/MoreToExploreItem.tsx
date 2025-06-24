import Image from "next/image"
import Link from "next/link"

type Props = {
	title: string
	desc: string
	link: string
	items: any[]
}

export const MoreToExploreItem = ({ title, desc, link, items }: Props) => {
	return (
		<Link
			href={`/user/${link}`}
			className='h-[100px] min-w-[230px] lg:min-w-auto flex-1 flex justify-between items-stretch border border-text-secondary rounded-xl group'
		>
			<div className='flex flex-col justify-between py-3 px-4'>
				<h6 className='font-bold group-hover:underline'>{title}</h6>
				<p className='text-xs text-text-secondary'>{desc}</p>
			</div>
			<div className='p-1 group-hover:opacity-80'>
				{items.length ? (
					<Image src={""} width={72} height={92} alt='poster' />
				) : (
					<div className='w-full h-full flex items-center justify-center bg-[#eaeaea] rounded-xl'>
						<Image
							className='min-w-[72px]'
							src={"/images/icons/no-movie.svg"}
							width={72}
							height={92}
							alt='poster'
						/>
					</div>
				)}
			</div>
		</Link>
	)
}
