import { IMovie } from "./movie.interface"

export interface ICrew {
	art: ICastPerson[]
	camera: ICastPerson[]
	"costume & make-up": ICastPerson[]
	crew: ICastPerson[]
	lighting: ICastPerson[]
	production: ICastPerson[]
	sound: ICastPerson[]
	"visual effects": ICastPerson[]
	directing: ICastPerson[]
	writing: ICastPerson[]
}

export interface ICastPerson {
	adult: boolean
	cast_id: number
	character: string
	credit_id: string
	gender: number
	id: number
	known_for_department: string
	name: string
	order: number
	original_name: string
	popularity: number
	profile_path: string
	movie: IMovie
}

export interface ICrewPerson {
	adult: boolean
	credit_id: string
	department: string
	gender: number
	character?: string
	id: number
	job: string
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string | null
}
