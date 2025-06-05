import { Movie, MovieSidebar } from "@/components/widgets"
import { axiosInstance } from "@/configs/axios.config"

const MoviePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params).slug

	const { data: movie } = await axiosInstance.get(`/movies/${slug}`)
    const {data: cast} = await axiosInstance.get(`/actors/${slug}`)
    return <div className="flex items-start gap-[70px] mt-7" >
        <Movie cast={cast} movie={movie} />
        <MovieSidebar />
    </div>
}

export default MoviePage
