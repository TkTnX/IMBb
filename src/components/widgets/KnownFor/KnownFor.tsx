"use client"

import { useState } from "react"

import { KnownForTab } from "@/components/features"
import { Skeleton } from "@/components/ui/skeleton"

import { useKnownFor } from "@/hooks/useKnownFor"

import { KnownForList } from "./KnownForList"

export const KnownFor = ({ slug }: { slug: string }) => {
	const { data, error, loading } = useKnownFor(slug)
	const [choosedTabs, setChoosedTabs] = useState<string[]>([])
	if (error) return <p className='text-center text-red-500'>{error}</p>
	return (
		<div>
			<div className='flex items-center gap-2 mt-4'>
				{loading
					? [...new Array(3)].map((_, index) => (
							<Skeleton
								className='rounded-2xl  h-[50px] w-[150px] bg-background-secondary'
								key={index}
							/>
						))
					: Object.entries(data).map(([key, value]) => (
							<KnownForTab
								keys={key}
								key={key}
								value={value}
								choosedTabs={choosedTabs}
								setChoosedTabs={setChoosedTabs}
							/>
						))}
			</div>
			<KnownForList loading={loading} data={data} choosedTabs={choosedTabs} />
		</div>
	)
}
