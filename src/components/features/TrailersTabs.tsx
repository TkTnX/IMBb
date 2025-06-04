"use client"

import { TRAILERS_TABS } from "@/constants/trailers.constants"

import { cn } from "@/lib/utils"
import { useTrailersStore } from "@/stores/trailersStore"

export const TrailersTabs = () => {
	const { currentTab, setCurrentTab } = useTrailersStore()
	return (
		<div className='flex items-center gap-4 bg-background-light-transparent-100 rounded-2xl p-2 mt-7 overflow-x-auto'>
			{TRAILERS_TABS.map(tab => (
				<button
					onClick={() => setCurrentTab(tab.value)}
					className={cn(
						"rounded-lg py-3 px-4 hover:bg-background-light-transparent-50 text-nowrap",
						currentTab === tab.value &&
							"bg-main-yellow text-black pointer-events-none"
					)}
					key={tab.value}
				>
					{tab.name}
				</button>
			))}
		</div>
	)
}
