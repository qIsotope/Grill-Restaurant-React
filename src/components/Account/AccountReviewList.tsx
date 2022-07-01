import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AccountReviewItem } from './AccountReviewItem'



export const AccountReviewList = (props: any) => {

	if (props.reviews.length === 0) {
		return (
			<>
				<div className='account-orders-label'>НЕТ Отзывов</div>
			</>
		)
	}
	else {


		return (
			<>
				<div className="account-reviews">
					<div className="account-reviews-list">
						{props.reviews.map((review: any) => (
							<AccountReviewItem key={review.id} email={review.email} date={review.date} author={review.email}
								comment={review.comment} params={review.params} id={review.id} setReviews={props.setReviews} />
						))}
					</div>
				</div>

			</>
		)
	}
}
