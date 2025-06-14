"use client"

import Image from "next/image"

export const SociaLink = ({
	objectKey,
	value
}: {
	objectKey: string
	value: string
  }) => {
  // TODO: Добавить toaster при копировании
	return (
		<button
			onClick={() => {
				navigator.clipboard.writeText(value)
			}}
			key={objectKey}
		>
			<Image
				src={`/images/icons/${objectKey}.svg`}
				alt={objectKey}
				width={24}
				height={24}
			/>
		</button>
	)
}
