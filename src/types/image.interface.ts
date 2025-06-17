
export interface IMovieImages {
    backdrops: IMovieImage[]
    logos: IMovieImage[]
    posters: IMovieImage[]
    
}

export interface IMovieImage {
    aspect_ration: number
    height: number
    iso_639_1: string
    file_path: string
    width: number
}