import React from 'react'
import { ICommentariesBlock } from '../../types/commentariesTypes'



export const CommentariesBlock: React.FC<ICommentariesBlock> = (props) => {
	
	return (
		<div className="singleitem-block">
			<div className="singleitem-image">
				<img src={'.' + props.product?.URL} alt="" />
			</div>
			<div className="singleitem-info">
				<div className="singleitem-name">{props.product?.name}</div>
				<div className="singleitem-cooking">
					Cooking: <br /><br />
					{props.product?.cooking}</div>
				<div className="singleitem-ingridients">
					Ingridients: <br /><br />
					{props.product?.ingridients}</div>
			</div>
			
		</div>
	)
}
