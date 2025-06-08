export interface IComment {
    id: number,
    comment: string,
    created_at: string,
    likes: number,
    user_rating: number
    user: {
        username: string,
        ids: {
            slug: string
        }
    },
    spoiler: boolean
}