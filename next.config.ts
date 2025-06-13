import type { NextConfig } from "next";





const nextConfig: NextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "walter-r2.trakt.tv",
				pathname: "/images/**" 
			},
			{
				protocol: "https",
				hostname: "**",
				pathname: "**"
			}
		]
	}
}

export default nextConfig