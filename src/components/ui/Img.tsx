"use client"

import Image, { ImageProps } from "next/image"
import { useState } from "react"

interface IProps extends ImageProps {}

export const Img = (props: IProps) => {
	const [imgSrc, setImgSrc] = useState(`https://${props.src}`)
	return (
		<Image
			{...props}
			alt={props.alt || ""}
			src={imgSrc}
			onError={() => setImgSrc("/images/no-poster.jpg")}
		/>
	)
}
