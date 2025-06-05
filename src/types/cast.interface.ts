import { IActor } from "./actor.interface"

export interface ICast {
	person: IActor
	character: string
	characters: string[]
	images: {
		headshot: string[]
	}
}

export interface ICrew {
	directing: ICastPerson[]
	writing: ICastPerson[]
}

export interface ICastPerson {
	job: string
	person: IActor
	images: {
		headshot: string
	}
}
