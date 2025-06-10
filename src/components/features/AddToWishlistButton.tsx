import { cn } from "@/lib/utils"
import Image from "next/image"

type Props = {
    className?: string
}

export const AddToWishlistButton = ({ className }: Props) => {
  return (
    <button className={cn('absolute top-0  hover:opacity-80 z-20', className)}>
    <Image
        width={39}
        height={50}
        src={"/images/icons/bookmark-plus.svg"}
        alt='add to wishlist'
    />
</button>
  )
}
