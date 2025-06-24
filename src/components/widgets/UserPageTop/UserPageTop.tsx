
type Props = {
    title: string,
    desc: string
}

export const UserPageTop = ({ title, desc }: Props) => {
  return (
    <div className='min-h-[150px] md:h-[200px] flex flex-col justify-center text-black'>
                    <h2 className='text-4xl md:text-8xl  font-bold'>
                        Your {title}
                    </h2>
                    <p className='text-xs sm:text-base font-semibold'>
                        {desc}
                    </p>
                    <div className='h-[150px] md:h-[200px] w-full bg-main-yellow absolute left-0 right-0 top-[72px] -z-10' />
                </div>
  )
}

// Your Watchlist is the place to track the titles you want to
//                         watch. You can sort your Watchlist by the IMDb rating or
//                         popularity score and arrange your titles in the order you
//                         want to see them.