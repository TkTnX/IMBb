type Props = {
	title: string
	items: string[] | Record<string, string>[]
}

export const MovieDetailsItem = ({ title, items }: Props) => {
	return (
		<div className='py-5 gap-2 border-b-2 border-background-light-transparent-50 flex items-start'>
			<h6 className='w-[150px] text-lg font-bold text-text-primary'>
				{title}
			</h6>
			<div>
				{items.map((item, index) =>
					typeof item === "string" && item.includes("http") ? (
						<a
							key={index}
							className='text-main-yellow-sec-dark hover:text-main-yellow'
							href={item}
						>
							Official Site
						</a>
					) : (
						<p key={index} className='text-main-yellow-sec-dark'>
							{typeof item === "string"
								? item
								: item.english_name}
						</p>
					)
				)}
			</div>
		</div>
	)
}
