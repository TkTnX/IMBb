import Image from "next/image"
import { AddToWishlistButton } from "../features"
import Link from "next/link"
import { Info, Star } from "lucide-react"

export const KnownForItem = () => {
  return (
    <div className=' flex-1 relative flex items-stretch gap-4 bg-background-light-transparent-50 rounded-lg  overflow-hidden group mt-4'>
    <Link href={`/movie/slug`} className='absolute inset-0'></Link>
    <div className='relative w-[70px] h-full '>
        <Image
            alt='TEMP NAME'
            fill
            src={"/images/temp-images/hero-poster1.jpg"}
        />
        <AddToWishlistButton className='left-0' />
    </div>
    <div className='flex-1 p-2'>
        <h3 className='font-bold group-hover:opacity-80'>
            Inside Out 2
        </h3>
        <p className='flex items-center gap-1 text-sm'>
            <Star
                size={16}
                color='var(--color-main-yellow)'
                fill='var(--color-main-yellow)'
            />
            <span>7.5</span>
        </p>
        <p className='text-sm'>Happy</p>
        <div className='flex items-center justify-between w-full mt-1 '>
            <p className='text-sm'>2024</p>
            <button className="group-hover:opacity-80">
                <Info color='var(--color-main-blue)' />
            </button>
        </div>
    </div>
</div>
  )
}
