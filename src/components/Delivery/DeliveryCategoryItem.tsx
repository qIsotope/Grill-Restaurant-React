import React from 'react'
import { IDeliveryCategoryItem } from '../../types/deliveryTypes'




export const DeliveryCategoryItem: React.FC<IDeliveryCategoryItem> = (props) => {
	return (
		<div {...props}>{props.children}</div>
	)
}
