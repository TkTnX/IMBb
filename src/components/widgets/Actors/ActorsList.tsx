import { Swiper } from "swiper/react"

type Props = {
	list: any
}

export const ActorsList = ({ list }: Props) => {
	return (
		<Swiper className='mt-8' slidesPerView={7} spaceBetween={30}>
			{/* {list.map(actor => (
				<SwiperSlide key={actor.}>
				</SwiperSlide>
			))} */}
		</Swiper>
	)
}
