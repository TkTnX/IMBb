"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { ActorItem } from "@/components/ui/ActorItem"
import { BigMovieItem } from "@/components/ui/BigMovieItem"
import { Skeleton } from "@/components/ui/skeleton"

import { useSearch } from "@/hooks/useSearch"

import { axiosInstance } from "@/configs/axios.config"

export const SearchResults = () => {
	const { error, results, type, loading } = useSearch()

	if (error)
		return <p className='text-4xl font-bold mt-20 text-center'>{error}</p>

	return (
		<div className='flex flex-col gap-4 mt-10'>
			{loading || (!results && !error)
				? [...new Array(5)].map((_, index) => (
						<Skeleton key={index} className='w-full h-[300px]' />
					))
				: results?.map(result => {
						switch (type) {
							case "person":
								return (
									<div
										key={result.id}
										className='w-fit min-w-3xs border rounded-2xl p-2 bg-background-light-transparent-50 hover:opacity-80'
									>
										<p className='text-2xl font-bold text-center mb-2'>
											Actor
										</p>
										<ActorItem actor={result} />
									</div>
								)
							case "movie":
								return (
									<div
										key={result.id}
										className=' min-w-3xs border rounded-2xl p-2 bg-background-light-transparent-50'
									>
										<p className='text-2xl font-bold text-center mb-2'>
											Movie
										</p>
										<BigMovieItem
											key={result.id}
											movie={result}
										/>
									</div>
								)
							default:
								switch (result.media_type) {
									case "person":
										return (
											<div
												key={result.id}
												className='w-fit min-w-3xs border rounded-2xl p-2 bg-background-light-transparent-50 hover:opacity-80'
											>
												<p className='text-2xl font-bold text-center mb-2'>
													Actor
												</p>
												<ActorItem actor={result} />
											</div>
										)
									case "movie":
										return (
											<div
												key={result.id}
												className=' min-w-3xs border rounded-2xl p-2 bg-background-light-transparent-50'
											>
												<p className='text-2xl font-bold text-center mb-2'>
													Movie
												</p>
												<BigMovieItem
													key={result.id}
													movie={result}
												/>
											</div>
										)
								}
						}
					})}
		</div>
	)
}
