import axios from 'axios';
import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { hideLoader, showLoader } from '../../redux/slices/loaderSlice';
import { ICreateCommentary } from '../../types/commentariesTypes';

export const CreateCommentary: React.FC<ICreateCommentary> = (props) => {
	const dispatch = useAppDispatch()
	const now = new Date().toLocaleString()
	const { email } = useAuth()
	const identificator = props.name && props.name.split(' ').join('')
	
	const addComment = async () => {
		dispatch(showLoader())
		const commentObject = {
			id: props.id,
			name: props.name,
			comment: props.comment,
			email: email,
			item: identificator,
			date: now.replace(',', ''),
			params: props.params
		}
		await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/comments', commentObject)
		const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/comments?item=' + props.item)
		props.setComments(response.data)
		dispatch(hideLoader())
		props.setComment('')
	}


	return (
		<>
			<div className="singleitem-comment">
				<div className="singleitem-comment-label">
					Оставьте отзыв
				</div>
				<textarea value={props.comment}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.setComment(e.target.value)}
					className="singleitem-textarea" />
				<button onClick={() => addComment()} type="button" className="singleitem-button">Отправить</button>
			</div>
		</>
	)
}

