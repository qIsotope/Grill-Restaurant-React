import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GalleryItem } from './GalleryItem'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { galleryData } from '../../data/data';

export const GallerySlider = () => {
	return (
		<div className="gallery-container">


			<Swiper
				slidesPerView={1}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				breakpoints={{
					768: {
						slidesPerView: 3,
					},
					964: {
						slidesPerView: 4,
					},
					460: {
						slidesPerView: 2,
					},
				}}
			>
				{galleryData.map(g => <SwiperSlide key={g.imgUrl1}><GalleryItem name1={g.text1} name2={g.text2} imgUrl1={g.imgUrl1} imgUrl2={g.imgUrl2} /></SwiperSlide>)}
			</Swiper>
		</div>
	)
}
