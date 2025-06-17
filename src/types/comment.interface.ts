export interface IComment {
	id: number
	comment: string
	created_at: string
	likes: number
	user_rating: number
	user: {
		username: string
		ids: {
			slug: string
		}
	}
	spoiler: boolean
}

export interface ITmdbComment {
	author: string
	author_details: {
		name: string
		username: string
		avatar_path: string
		rating: string
	}
	content: string
	created_at: string
	updated_at: string
	id: string
	url: string
}
