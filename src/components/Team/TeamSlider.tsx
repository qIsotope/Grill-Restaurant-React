import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import { TeamItem } from './TeamItem'
import { teamData } from '../../data/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const TeamSlider = () => {

	return (
		<div className="team-slider">
			<Swiper
				slidesPerView={1}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				breakpoints={{
					570: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					800: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				{teamData.map(t =>
					<SwiperSlide key={t.name}>
						<TeamItem imgUrl={t.imgUrl} name={t.name} proffesion={t.proffesion} />
					</SwiperSlide>)}
			</Swiper>
		</div>
	)
}
