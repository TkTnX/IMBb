import { Actors, Anticipated, BoxOffice, Featured, Hero, TopImdb, TopPicks } from "@/components/widgets";



import { axiosInstance } from "@/configs/axios.config";





export default async function Home() {
	const [
		{ data: hero },
		{ data: featured },
		{ data: topPicks },
		{ data: topImdb },
		{ data: anticipated },
		{ data: boxOffice },
		{ data: actors }
	] = await Promise.all([
		axiosInstance.get("/trakt/movies?type=anticipated&limit=3"),
		axiosInstance.get("/trakt/movies?type=favorited"),
		axiosInstance.get("/trakt/movies?type=popular"),
		axiosInstance.get("/trakt/movies?type=trending"),
		axiosInstance.get("/trakt/movies?type=trending"),
		axiosInstance.get("/trakt/movies/boxoffice"),
		axiosInstance.get("/tmdb/person")
	])

	return (
		<>
			<Hero data={hero} />
			<Featured data={featured} />
			<TopPicks data={topPicks} />
			<TopImdb data={topImdb} />
			<Anticipated data={anticipated} />
			<BoxOffice data={boxOffice} />
			<Actors data={actors} />
		</>
	)
}