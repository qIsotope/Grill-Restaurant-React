import React from 'react'
import { SectionLabel } from '../sectionLabel/SectionLabel';


import { ReviewSlider } from './ReviewSlider';
export const Reviews = () => {
	return (
		<section className="reviews">
			<div className="container">
				<SectionLabel title='REVIEWS' subtitle='Clients' />
				<ReviewSlider />
			</div>
		</section>
	)
}
