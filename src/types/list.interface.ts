export interface IListObj {
	comment_count: number
	like_count: number
	list: IList
}

export interface IList {
	description: string
	ids: {
		slug: string
		trakt: number
	}
	likes: string
	name: string
	share_link: string
	user: {
		images: {
			avatar: {
				full: string
			}
		}
	}
}
