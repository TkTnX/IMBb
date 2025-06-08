import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Star } from "lucide-react"
import { useState } from "react"

export const ReviewsSelectRating = () => {
	const [rating, setRating] = useState("3")

  return (
    <Select value={String(rating)} onValueChange={setRating}>
    <SelectTrigger className='rounded-lg !py-2.5 !px-4 bg-background-light-transparent-50 shadow-inset flex items-center justify-between gap-2'>
        <span className='text-text-secondary'>Rating:</span>
        <div className='flex items-center gap-1'>
            {[...new Array(Number(rating))].map((_, index) => (
                <Star
                    size={18}
                    key={index}
                    color='var(--color-main-yellow)'
                    fill='var(--color-main-yellow)'
                />
            ))}
        </div>
    </SelectTrigger>

    <SelectContent>
        {[...new Array(3)].map((_, index) => (
            <SelectItem key={index} value={String(index + 1)}>
                {[...new Array(index + 1)].map((_, index) => (
                    <Star
                        size={18}
                        key={index}
                        color='var(--color-main-yellow)'
                        fill='var(--color-main-yellow)'
                    />
                ))}
            </SelectItem>
        ))}
    </SelectContent>
</Select>
  )
}
