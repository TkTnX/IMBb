import { Metadata } from "next"
import Image from "next/image"

import { BiographyText } from "@/components/features"
import { KnownFor } from "@/components/widgets"

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
	return (
		<>
			<section className='mt-12'>
				<h1 className='text-2xl text-white'>{person.name} <span className="text-lg text-text-secondary">({new Date().getFullYear() - new Date(person.birthday!).getFullYear()})</span></h1>
				<p className='capitalize text-text-secondary mt-4'>
					{person.known_for_department}
				</p>
				<div className='mt-2 flex items-start justify-center gap-4'>
					<div className=' relative max-w-[340px] h-[490px]  rounded overflow-hidden flex-1 w-full'>
						<Image
							src={`https://${person.images.headshot[0]}`}
							alt={person.name}
							fill
							className='object-cover'
						/>
					</div>
					<div>
						{person.name && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Name:{" "}
								<span className='text-main-yellow'>
									{person.name}
								</span>
							</p>
						)}
						{person.birthday && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Birtday:{" "}
								<span className='text-main-yellow'>
									{person.birthday}
								</span>
							</p>
						)}
						{person.birthplace && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Birthplace:{" "}
								<span className='text-main-yellow'>
									{person.birthplace}
								</span>
							</p>
						)}
						{person.death && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Death:{" "}
								<span className='text-main-yellow'>
									{person.death}
								</span>
							</p>
						)}
						{person.gender && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Gender:{" "}
								<span className='text-main-yellow capitalize'>
									{person.gender}
								</span>
							</p>
						)}
					</div>
				</div>
			</section>
			<section className='mt-10'>
				<h6 className='border-l-2 border-main-yellow pl-2 rounded text-2xl'>
					Biography
				</h6>
				<BiographyText text={person.biography} />
			</section>
			<section className='mt-10'>
				<h6 className='border-l-2 border-main-yellow pl-2 rounded text-2xl'>
					Known For
				</h6>
				<KnownFor slug={slug} />
			</section>
		</>
	)
}

export default PersonPage
