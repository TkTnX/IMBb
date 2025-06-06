type Props = { title: string; children?: React.ReactNode }

export const SectionTitle = ({ title, children }: Props) => {
	return (
		<div className='flex  vsm:flex-col sm:flex-row  sm:items-center gap-2'>
			<div className="flex items-center gap-2">
			<div className='w-1 h-1 bg-main-yellow rounded-full' />
			<h4 className='text-xl vsm:text-2xl text-text-primary'>{title}</h4>
			</div>
			{children}
		</div>
	)
}
