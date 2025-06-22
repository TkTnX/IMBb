export interface IActor {
	biography: string
	birthday: string | null
	birthplace: string | null
	death: string | null
	gender: string
	ids: { slug: string }
	name: string
	images: {
		headshot: string[]
		fanart: string[]
	}
	known_for_department: string
	social_ids: Record<string, string>
	status?: number
}

export interface ITmdbActor {
	adult: boolean
	birthday?: string
	place_of_birth?: string
	deathday?: string
	imdb_id?: string
	biography: string
	gender: number
	id: number
	known_for: {
		adult: boolean
		backdrop_path: string
		genre_ids: number[]
		id: number
		media_type: string
		original_name: string
		original_title: string
		overview: string
		poster_path: string
		release_date: string
		title: string
		video: boolean
		vote_average: number
		vote_count: number
	}[]
	known_for_department: string
	name: string
	popularity: number
	profile_path: string
}
