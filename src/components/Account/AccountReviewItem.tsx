import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { hideLoader, showLoader } from '../../redux/slices/loaderSlice';
import { IAccountReviewItem } from '../../types/accountBlock';


export const AccountReviewItem: React.FC<IAccountReviewItem> = (props) => {
	const { email } = useAuth()
	const dispatch = useAppDispatch()
	const deleteComment = async (id: string) => {
		dispatch(showLoader())
		await axios.delete('https://62965300810c00c1cb73a6b4.mockapi.io/comments/' + id)
		const response = await axios.get(`https://62965300810c00c1cb73a6b4.mockapi.io/comments?email=${email}`)
		props.setReviews(response.data)
		dispatch(hideLoader())
	}

	return (
		<div className="account-review-item">
			<div className="single-item-header">
				<div className="singleitem-author">
					{props.email}
				</div>
				<div className="single-item-date">
					{email === props.author &&
						<div style={{ justifyContent: 'end' }}>
							<div onClick={() => { deleteComment(props.id) }} className="singleitem-delete">
								<span>x</span>
							</div>
						</div>
					}
					{props.date}
				</div>
			</div>
			<Link to={`/services/${props.params}`} className="account-review-text">
				{props.comment}
			</Link>
		</div>
	)
}


