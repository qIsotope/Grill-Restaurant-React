import { IComment, ICommentariesList } from '../../types/commentariesTypes';
import { CommentariesItem } from './CommentariesItem'


export const CommentariesList = (props: ICommentariesList) => {
	return (
		<>
			{props.commentaries?.map((comm: IComment) => (
				<CommentariesItem key={comm.id} comm={comm} params={props.params} setComments={props.setComments} />
			))}
		</>
	)
}
