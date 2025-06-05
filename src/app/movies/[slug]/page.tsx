import { Movie, MovieSidebar } from "@/components/widgets"
import { MoviePhotos } from "@/components/widgets/Movie/MoviePhotos"
import { axiosInstance } from "@/configs/axios.config"
import { getAvailableImages } from "@/helpers/getAvailableImages"

const MoviePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params).slug

	const { data: movie } = await axiosInstance.get(`/movies/${slug}`)
    const {data: cast} = await axiosInstance.get(`/actors/${slug}`)
    return <div className="flex items-start gap-[70px] mt-7" >
        <div>
            <Movie cast={cast} movie={movie} />
            <MoviePhotos photos={getAvailableImages(movie)} />
       </div>
        <MovieSidebar />
    </div>
}

export default MoviePage
