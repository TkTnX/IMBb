import { IActor } from "./actor.interface"

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
