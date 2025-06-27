import { ChevronRight } from "lucide-react";
import Link from "next/link";



import { Title } from "@/components/ui/Title";



import { HeroFeatured } from "./HeroFeatured";
import { HeroSwiper } from "./HeroSwiper";
import { axiosInstance } from "@/configs/axios.config";
import { IMovieList } from "@/types/movie.interface";





export const Hero = async ({ data }: { data: IMovieList[] }) => {
	if ("message" in data)
		return (
			<p className='my-10 text-center text-red-500'>{data.message as string}</p>
		)
	
	return (
		<section className='flex flex-col lg:flex-row items-start gap-8 mt-12 relative'>
			{/* LEFT */}
			<HeroSwiper items={data} />

			{/* RIGHT */}
			<div className='lg:w-[370px] lg:max-h-[650px] w-full overflow-hidden'>
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

				<HeroFeatured items={data} />
			</div>
		</section>
	)
}