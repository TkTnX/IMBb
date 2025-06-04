import { TrailersTabs } from "@/components/features"
import { TrailersList } from "@/components/widgets"

const TrailersPage = () => {
	return (
		<section className='container mt-12'>
			<h2 className='text-2xl text-text-primary'>
				Watch New Movie & TV Trailers
			</h2>
			{/* TABS */}
			<TrailersTabs />

			<TrailersList />
		</section>
	)
}

export default TrailersPage
