import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { BiographyText, SociaLink } from "@/components/features"
import { Img } from "@/components/ui/Img"
import { KnownFor } from "@/components/widgets"

import { axiosInstance } from "@/configs/axios.config"
import { IActor } from "@/types/actor.interface"

type Props = {
	params: Promise<{ slug: string }>
}

async function getPerson(slug: string): Promise<IActor> {
	const { data } = await axiosInstance.get(`/trakt/actors/person/${slug}`)
	return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const person = await getPerson((await params).slug)

	if (!person) return { title: "Person not found" }

	return { title: person.name }
}

const PersonPage = async ({
	params
}: {
	params: Promise<{ slug: string }>
}) => {
	const slug = (await params).slug
	const person = await getPerson(slug)
	if (!person || person.status === 404)
		return (
			<div className='flex-1 h-[calc(100vh-72px-375px)] text-center flex flex-col items-center justify-center '>
				<p className='text-4xl font-bold text-main-yellow'>
					Person not found!{" "}
				</p>
				<p className='text-white text-7xl font-bold'>404</p>
			</div>
		)

	const socials = Object.fromEntries(
		Object.entries(person.social_ids).filter(([key, value]) => value)
	)

	return (
		<>
			<section className='mt-12'>
				<h1 className='text-2xl text-white'>
					{person.name}{" "}
					<span className='text-lg text-text-secondary'>
						(
						{new Date().getFullYear() -
							new Date(person.birthday!).getFullYear()}
						)
					</span>
				</h1>
				<p className='capitalize text-text-secondary mt-4'>
					{person.known_for_department}
				</p>
				<div className='mt-2 flex items-start justify-center gap-4'>
					<div className=' relative max-w-[340px] h-[490px]  rounded overflow-hidden flex-1 w-full'>
						{
							<Img
								src={person.images.headshot[0]}
								alt={person.name}
								fill
								className='object-cover'
							/>
						}
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
						<div className='flex items-center gap-2 py-2'>
							{Object.entries(socials).map(([key, value]) => {
								return (
									<SociaLink
										key={key}
										objectKey={key}
										value={value}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</section>
			<section className='mt-10'>
				<h3 className='border-l-2 border-main-yellow pl-2 rounded text-2xl'>
					Biography
				</h3>
				<BiographyText text={person.biography} />
			</section>
			<section className='mt-10'>
				<h3 className='border-l-2 border-main-yellow pl-2 rounded text-2xl'>
					Known For
				</h3>
				<KnownFor slug={slug} />
			</section>
		</>
	)
}

export default PersonPage
