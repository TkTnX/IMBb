import { Info } from "lucide-react"
import Link from "next/link"

import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"

import { IMovie } from "@/types/movie.interface"

export const MovieMoreInfo = ({ movie }: { movie: IMovie }) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link href={`/movies/${movie.ids.tmdb}`}>
					<Info />
				</Link>
			</TooltipTrigger>
			<TooltipContent className='flex flex-col gap-2'>
				<p className='text-white'>Released year: {movie.year}</p>
				<p className='text-white'>Country: {movie.country}</p>
				<p className='text-white'>Language: {movie.language}</p>
			</TooltipContent>
		</Tooltip>
	)
}
