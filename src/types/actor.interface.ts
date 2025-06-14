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
