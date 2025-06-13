import { Metadata } from "next"

import { axiosInstance } from "@/configs/axios.config"
import { IActor } from "@/types/actor.interface"

type Props = {
	params: Promise<{ slug: string }>
}

async function getPerson(slug: string): Promise<IActor> {
	const { data } = await axiosInstance.get(`/actors/person/${slug}`)
	return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const person = await getPerson((await params).slug)

	return { title: person.name }
}

const PersonPage = async ({
	params
}: {
	params: Promise<{ slug: string }>
}) => {
	const slug = (await params).slug
    const person = await getPerson(slug)
    console.log(person)
    return <section className="mt-12">
        <h1 className="text-2xl text-white">{person.name}</h1>
        {/* <p>{person.known_for_department}</p> */}
    </section>
}

export default PersonPage
