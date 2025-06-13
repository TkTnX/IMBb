"use client"

import { Info, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { AddToWishlistButton } from "@/components/features"

import { axiosInstance } from "@/configs/axios.config"

export const KnownFor = ({ slug }: { slug: string }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosInstance.get(
					`/actors/person/${slug}/movies`
				)

				console.log(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	return (
		<div className='grid grid-cols-2 gap-3'>
			<div className=' flex-1 relative flex items-stretch gap-4 bg-background-light-transparent-50 rounded-lg  overflow-hidden group mt-4'>
				<Link href={`/movie/slug`} className='absolute inset-0'></Link>
				<div className='relative w-[70px] h-full '>
					<Image
						alt='TEMP NAME'
						fill
						src={"/images/temp-images/hero-poster1.jpg"}
					/>
					<AddToWishlistButton className='left-0' />
				</div>
				<div className='flex-1 p-2'>
					<h3 className='font-bold group-hover:opacity-80'>
						Inside Out 2
					</h3>
					<p className='flex items-center gap-1 text-sm'>
						<Star
							size={16}
							color='var(--color-main-yellow)'
							fill='var(--color-main-yellow)'
						/>
						<span>7.5</span>
					</p>
					<p className='text-sm'>Happy</p>
					<div className='flex items-center justify-between w-full mt-1 '>
						<p className='text-sm'>2024</p>
						<button className="group-hover:opacity-80">
							<Info color='var(--color-main-blue)' />
						</button>
					</div>
				</div>
			</div>
			<div className=' flex-1 relative flex items-stretch gap-4 bg-background-light-transparent-50 rounded-lg  overflow-hidden group mt-4'>
				<Link href={`/movie/slug`} className='absolute inset-0'></Link>
				<div className='relative w-[70px] h-full '>
					<Image
						alt='TEMP NAME'
						fill
						src={"/images/temp-images/hero-poster1.jpg"}
					/>
					<AddToWishlistButton className='left-0' />
				</div>
				<div className='flex-1 p-2'>
					<h3 className='font-bold group-hover:opacity-80'>
						Inside Out 2
					</h3>
					<p className='flex items-center gap-1 text-sm'>
						<Star
							size={16}
							color='var(--color-main-yellow)'
							fill='var(--color-main-yellow)'
						/>
						<span>7.5</span>
					</p>
					<p className='text-sm'>Happy</p>
					<div className='flex items-center justify-between w-full mt-1 '>
						<p className='text-sm'>2024</p>
						<button className="group-hover:opacity-80">
							<Info color='var(--color-main-blue)' />
						</button>
					</div>
				</div>
			</div>
			<div className=' flex-1 relative flex items-stretch gap-4 bg-background-light-transparent-50 rounded-lg  overflow-hidden group mt-4'>
				<Link href={`/movie/slug`} className='absolute inset-0'></Link>
				<div className='relative w-[70px] h-full '>
					<Image
						alt='TEMP NAME'
						fill
						src={"/images/temp-images/hero-poster1.jpg"}
					/>
					<AddToWishlistButton className='left-0' />
				</div>
				<div className='flex-1 p-2'>
					<h3 className='font-bold group-hover:opacity-80'>
						Inside Out 2
					</h3>
					<p className='flex items-center gap-1 text-sm'>
						<Star
							size={16}
							color='var(--color-main-yellow)'
							fill='var(--color-main-yellow)'
						/>
						<span>7.5</span>
					</p>
					<p className='text-sm'>Happy</p>
					<div className='flex items-center justify-between w-full mt-1 '>
						<p className='text-sm'>2024</p>
						<button className="group-hover:opacity-80">
							<Info color='var(--color-main-blue)' />
						</button>
					</div>
				</div>
			</div>
			<div className=' flex-1 relative flex items-stretch gap-4 bg-background-light-transparent-50 rounded-lg  overflow-hidden group mt-4'>
				<Link href={`/movie/slug`} className='absolute inset-0'></Link>
				<div className='relative w-[70px] h-full '>
					<Image
						alt='TEMP NAME'
						fill
						src={"/images/temp-images/hero-poster1.jpg"}
					/>
					<AddToWishlistButton className='left-0' />
				</div>
				<div className='flex-1 p-2'>
					<h3 className='font-bold group-hover:opacity-80'>
						Inside Out 2
					</h3>
					<p className='flex items-center gap-1 text-sm'>
						<Star
							size={16}
							color='var(--color-main-yellow)'
							fill='var(--color-main-yellow)'
						/>
						<span>7.5</span>
					</p>
					<p className='text-sm'>Happy</p>
					<div className='flex items-center justify-between w-full mt-1 '>
						<p className='text-sm'>2024</p>
						<button className="group-hover:opacity-80">
							<Info color='var(--color-main-blue)' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
