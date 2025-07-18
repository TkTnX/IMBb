import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

import { useFilters } from "@/hooks/useFilters"

export const MoviesSearch = () => {
	const { createQueryString } = useFilters()
	const router = useRouter()
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()

		const formData = new FormData(e.target as HTMLFormElement)
		router.push(`/search?q=${formData.get("query")}&type=movie`)
	}
	return (
		<div className='pb-7 border-b-2 border-b-background-light-transparent-100'>
			<form
				onSubmit={onSubmit}
				className='flex items-center    border border-background-light-transparent-100 rounded-lg w-fit h-fit'
			>
				<input
					name='query'
					placeholder='Search by title...'
					className='flex-1 outline-none p-2 max-w-52  '
				/>
				<button>
					<Search />
				</button>
			</form>
		</div>
	)
}
