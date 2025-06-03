export interface IActor {
    biography: string,
    birthday: string | null,
    birthplace: string | null,
    gender: string,
    ids: { slug: string },
    name: string,
    images: {
        headshot: string[]
    }
}