import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { Title } from "../ui/Title"

import { HeroFeatured } from "./HeroFeatured"
import { HeroSwiper } from "./HeroSwiper"
import { axiosInstance } from "@/configs/axios.config"

export const Hero = async () => {
	const res = await axiosInstance.get("/movies/hero")

	console.log(res.data[0].movie)

	return (
		<section className='flex flex-col lg:flex-row items-start gap-8 mt-12 relative'>
			{/* LEFT */}
			<HeroSwiper items={[]} />

			{/* RIGHT */}
			<div className='lg:w-[370px] lg:max-h-[640px] w-full overflow-hidden'>
				<div className='flex flex-col sm:flex-row items-start gap-4 lg:items-center justify-between '>
					<Title
						text='Featured Videos'
						className='text-4xl text-white lg:text-text-primary lg:text-lg'
					/>
					<Link
						href={"/trailers"}
						className='flex items-center rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-inner justify-center hover:bg-background-light-transparent-50 gap-2.5'
					>
						Browse Trailers
						<ChevronRight size={16} />
					</Link>
				</div>

				<HeroFeatured />
			</div>

			<div className='blur-[500px] bg-[#9e8bf84d] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[962px] -z-10' />
		</section>
	)
}
