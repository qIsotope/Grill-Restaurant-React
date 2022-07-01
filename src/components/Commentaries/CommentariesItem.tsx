import axios from 'axios'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/useAuth'
import { hideLoader, showLoader } from '../../redux/slices/loaderSlice'
import { ICommentariesItem } from '../../types/commentariesTypes'


export const CommentariesItem = (props: ICommentariesItem) => {
	const { email } = useAuth()

	const dispatch = useAppDispatch()
	const deleteComment = async (id: string) => {
		dispatch(showLoader())
		await axios.delete('https://62965300810c00c1cb73a6b4.mockapi.io/comments/' + id)
		const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/comments?item=' + props.comm.item)
		props.setComments(response.data)
		dispatch(hideLoader())
	}

	return (
		<>
			<div className="singleitem-comments">
				<div className="single-item-header">
					<div className="singleitem-author">
						{props.comm.email}
					</div>
					<div style={{ justifyContent: 'end' }}>
						{email === props.comm.email &&
							<div onClick={() => deleteComment(props.comm.id)} className="singleitem-delete">
								x
							</div>
						}
						<div className="single-item-date">
							{props.comm.date}
						</div>
					</div>
				</div>
				<div className="singleitem-author-comment">
					{props.comm.comment}
				</div>
			</div>
		</>
	)
}