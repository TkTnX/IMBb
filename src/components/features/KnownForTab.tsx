import { Dot, X } from "lucide-react"

import { cn } from "@/lib/utils"

type Props = {
	keys: string
	value: string[] | object
	choosedTabs: string[]
	setChoosedTabs: React.Dispatch<React.SetStateAction<string[]>>
}

export const KnownForTab = ({
	keys,
	value,
	choosedTabs,
	setChoosedTabs
}: Props) => {
	const isClicked = choosedTabs.includes(keys)
	const onClick = () => {
		isClicked
			? setChoosedTabs(prev => prev.filter(tab => tab !== keys))
			: setChoosedTabs(prev => [...prev, keys])
	}

	return (
		<button
			className={cn(
				"capitalize rounded-2xl border border-main-yellow text-lg py-2 px-4 flex items-center gap-2 hover:bg-main-yellow/50 hover:text-white ",
				{ "bg-main-yellow text-white": isClicked }
			)}
			onClick={onClick}
			key={keys}
		>
			{isClicked && <X />}
			{keys} <Dot size={16} />
			<span>
				{(Array.isArray(value) && value.length) ||
					Object.entries(value).length}
			</span>
		</button>
	)
}
