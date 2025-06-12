import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import { Footer, Header } from "@/components/widgets"

import "./globals.css"

export const metadata: Metadata = {
	title: {
		absolute: "IMBb: Ratings, Reviews, and Where to Watch the Best Movie",
		template: `%s | ${"IMBd: Ratings, Reviews, and Where to Watch the Best Movie"}`
	},
	description: "Ratings, Reviews, and Where to Watch the Best Movie"
}

const roboto = Roboto({
	weight: ["400", "600", "700", "900"],
	subsets: ["latin"]
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// <ClerkProvider
		// 	appearance={{
		// 		baseTheme: dark
		// 	}}
		// >
			<html lang='en' suppressHydrationWarning>
				<body className={`${roboto.className} antialiased`}>
					<Header />
					<main className='container'>{children}</main>
					<Footer />
				</body>
			</html>
		// </ClerkProvider>
	)
}
