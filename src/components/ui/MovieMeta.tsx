import { getRuntime } from "@/helpers/getRuntime"
import { IMovie } from "@/types/movie.interface"

type Props = {
    movie: IMovie
}

export const MovieMeta = ({ movie }: Props) => {
	return (
		<div className='flex items-center gap-2.5 text-text-secondary'>
			<p>{movie.year}</p>

			{movie.certification && (
				<>
					<div className='w-1 h-1 rounded-full bg-text-secondary' />{" "}
					<p>{movie.certification}</p>
				</>
			)}
			{movie.runtime && (
				<>
					<div className='w-1 h-1 rounded-full bg-text-secondary' />
					<p>{getRuntime(movie.runtime)}</p>
				</>
			)}
		</div>
	)
}
