import { ICastPerson, ICrew, ICrewPerson } from "./cast.interface"

export interface IMovieList {
	list_count: number
	movie: IMovie
}

export interface IMovie {
	available_translations: string[]
	certification: string | null
	country: string
	language: string
	languages: string[]
	original_title: string
	overview: string
	released: string
	status: string
	tagline: string | null
	title: string
	trailer: string
	year: number
	runtime: number
	homepage: string | null
	votes: number
	ids: {
		slug: string
		imdb: string
	}
	genres: string[]
	images: {
		clearart: string[]
		thumb: string[]
		banner: string[]
		logo: string[]
		poster: string[]
		fanart: string[]
	}
	rating: number
}

export interface ITmdbMovie {
	adult: boolean
	backdrop_path: string
	genre_ids: string[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface ITmdbMovieDetailed extends ITmdbMovie {
	budget: number
	belongs_to_collection: null | string
	genres: {
		name: string
		id: number
	}[]
	homepage: string
	imdb_id: string
	production_companies: {
		id: number
		logo_path: string
		name: string
		origin_country: string
	}
	production_countries: {
		name: string
	}
	revenue: number
	runtime: number
	spoken_languages: { english_name: string; name: string }[]
	status: string
	tagline: string
}

export interface IMoviePeopleDetails {
	cast: ICastPerson[]
	crew: ICrewPerson[]
}

export interface IBoxOfficeItem {
	revenue: number
	movie: IMovie
}
