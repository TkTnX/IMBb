import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://image.openmoviedb.com/**")]
	}
}

export default nextConfig
