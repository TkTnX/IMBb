import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Sign In",
}

const Page = () => {
	return (
		<div className='flex justify-center items-center h-[calc(100vh-72px)]'>
			<SignIn />
		</div>
	)
}

export default Page
