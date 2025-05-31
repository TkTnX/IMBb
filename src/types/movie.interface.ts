export interface IMovieList {
	list_count: number
	movie: IMovie
}

export interface IMovie {
	country: string
	language: string
	original_title: string
	overview: string
	released: string
	status: string
	title: string
	trailer: string | null
	year: string
	homepage: string
	ids: {
		slug: string
		imdb: string
	}
	genres: string[]
	images: {
		banner: string[]
		logo: string[]
		poster: string[]
	}
	rating: number
}