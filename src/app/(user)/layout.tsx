import { MoreToExplore } from "@/components/widgets"

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section>
			
			<div className='mt-10 flex flex-col lg:flex-row items-start gap-6'>
				{/* LIST */}
				{children}

				{/* More to explore (your ratings, your watchlist, your reviews) */}
				<MoreToExplore />
			</div>
		</section>
	)
}

export default UserLayout
