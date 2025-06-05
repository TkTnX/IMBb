import { ICast, ICrew } from "./cast.interface"

export interface IMovieList {
	list_count: number
	movie: IMovie
}

export interface IMovie {
	available_translation: string[]
	certification: string | null
	country: string
	language: string
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
	}
	rating: number
}


export interface IMoviePeopleDetails {
	cast: ICast[],
	crew: ICrew
}
