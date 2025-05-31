import axios from "axios"
import { NextResponse } from "next/server"
import { Vibrant } from "node-vibrant/node"
import sharp from "sharp"

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const imageUrl = searchParams.get("image")

	if (!imageUrl)
		return NextResponse.json(
			{ error: "No image provided" },
			{ status: 400 }
		)

	const imageRes = await axios.get(imageUrl, { responseType: "arraybuffer" })
	const png = await sharp(imageRes.data).toFormat("png").toBuffer()
	const palette = await Vibrant.from(png).getPalette()

	return NextResponse.json({
		color: palette?.Vibrant?.hex
	})
}
