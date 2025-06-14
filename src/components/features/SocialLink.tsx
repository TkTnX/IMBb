"use client"

import Image from "next/image"
import { toast } from "react-toastify"

export const SociaLink = ({
	objectKey,
	value
}: {
	objectKey: string
	value: string
}) => {
	const onClick = (value: string) => {
		navigator.clipboard.writeText(value)
		toast.success(`Copied to clipboard - @${value}`)
	}

	return (
		<button onClick={() => onClick(value)} key={objectKey}>
			<Image
				src={`/images/icons/${objectKey}.svg`}
				alt={objectKey}
				width={24}
				height={24}
			/>
		</button>
	)
}
