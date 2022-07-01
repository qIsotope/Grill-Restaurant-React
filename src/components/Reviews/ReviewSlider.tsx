import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ReviewItem } from './ReviewItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviewData } from '../../data/data';


export const ReviewSlider = () => {

	return (
		<div className="reviews-content">
			<div className="reviews-slider">
				<Swiper
					slidesPerView={1}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
					breakpoints={{
						1030: {
							slidesPerView: 4,
						},
						583: {
							slidesPerView: 2,
						},
					}}
				>
					{reviewData.map(r =>
						<SwiperSlide key={r.name}><ReviewItem review={r.review} imgUrl={r.imgUrl} name={r.name} /></SwiperSlide>)}
				</Swiper>
			</div>
		</div>
	)
}
