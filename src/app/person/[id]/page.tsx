import { Metadata } from "next"

import { BiographyText, SociaLink } from "@/components/features"
import { Img } from "@/components/ui/Img"
import { KnownFor } from "@/components/widgets"

import { axiosInstance } from "@/configs/axios.config"
import { IActor, ITmdbActor } from "@/types/actor.interface"

type Props = {
	params: Promise<{ id: string }>
}

async function getPerson(id: string): Promise<ITmdbActor> {
	const { data } = await axiosInstance.get(`/tmdb/person/${id}`)

	return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = (await params).id
	const person = await getPerson(id)
	if (!person) return { title: "Person not found" }

	return { title: person.name }
}

const PersonPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id
	const person = await getPerson(id)
	if (!person)
		return (
			<div className='flex-1 h-[calc(100vh-72px-375px)] text-center flex flex-col items-center justify-center '>
				<p className='text-4xl font-bold text-main-yellow'>
					Person not found!{" "}
				</p>
				<p className='text-white text-7xl font-bold'>404</p>
			</div>
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
						<Img
							loading='lazy'
							src={`${process.env.NEXT_PUBLIC_TMDB_MEDIA}/w185${person.profile_path}`}
							fill
							className='  object-cover '
							alt={person.name}
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
						{person.place_of_birth && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Birthplace:{" "}
								<span className='text-main-yellow'>
									{person.place_of_birth}
								</span>
							</p>
						)}
						{person.deathday && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Death:{" "}
								<span className='text-main-yellow'>
									{person.deathday}
								</span>
							</p>
						)}
						{person.gender && (
							<p className='text-lg py-2 border-b-1 border-b-background-light-transparent-100'>
								Gender:{" "}
								<span className='text-main-yellow capitalize'>
									{person.gender === 1 ? "Female" : "Male"}
								</span>
							</p>
						)}
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
				<KnownFor id={person.imdb_id!} />
			</section>
		</>
	)
}

export default PersonPage
