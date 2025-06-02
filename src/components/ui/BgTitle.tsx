export const BgTitle = ({ text }: { text: string }) => {
	return (
		<h1 className='font-black text-center text-[#c3c3c31a] hidden sm:block sm:text-7xl md:text-[100px] lg:text-[150px] 2xl:text-[200px] absolute top-0 2xl:-top-[50px] left-0 right-0 text-nowrap pointer-events-none'>
			{text}
		</h1>
	)
}
