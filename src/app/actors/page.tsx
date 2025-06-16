import { Metadata } from "next"

import { PopularActors } from "@/components/widgets"

export const metadata: Metadata = {
	title: "Most popular celebs"
}

const ActorsPage = () => {
	return (
		<section className='mt-10'>
			<h6 className='text-xl text-text-secondary'>IMBb Chart</h6>
			<h1 className='text-4xl font-bold border-l-4 border-l-main-yellow mt-2 pl-4'>
				Most popular actors
			</h1>
			<PopularActors />
		</section>
	)
}

export default ActorsPage
