import { Skeleton } from "@/components/ui/skeleton"

export const TrailersListSkeleton = () => {
	return [...new Array(12)].map((_, index) => (
		<Skeleton
			className='w-full h-[465px] bg-background-secondary'
			key={index}
		/>
	))
}
