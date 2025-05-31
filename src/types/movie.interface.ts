export interface IMovie {
    id: number,
    ageRating: number | null,
    name: string | null,
    alternativeName: string | null,
    poster: {
        url: string | null,
        previewUrl: string | null
    },
    type: string | null
    year: string | null,
    genres: { name: string | null }[] | null,
    countries: { name: string | null }[] | null,
    description: string | null,
}