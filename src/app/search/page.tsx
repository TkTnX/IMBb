import { SearchResults } from "@/components/widgets/SearchResults/SearchResults"

const SearchPage = async ({
	searchParams
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
	const query = (await searchParams).q
	return (
		<section className='mt-12'>
			<h1 className='text-2xl'>Search results for "{query}"</h1>
			<SearchResults />
		</section>
	)
}

export default SearchPage
