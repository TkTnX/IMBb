import { IActor } from "./actor.interface"

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
	job: string
	person: IActor
	character: string
	images: {
		headshot: string
	}
}
