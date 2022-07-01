import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IReviewItem {
	review: string;
	imgUrl: string;
	name: string;
}

export const ReviewItem = ({ review, imgUrl, name }: IReviewItem) => {
	return (
		<div className="reviews__slider-item">
			<div className="reviews__slider-review">
				{review}
			</div>
			<div className="reviews__slider-person">
				<div className="reviews__person-img">
					<img src={imgUrl} alt="" />
				</div>
				<div className=" reviews__person-info">
					<div className="reviews__person-name">{name}</div>
					<div className="reviews__person-stars">
						<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
					</div>
				</div>
			</div>
		</div>
	)
}
