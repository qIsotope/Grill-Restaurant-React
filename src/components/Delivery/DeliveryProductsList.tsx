import { IDeliveryProductsList, IProduct } from '../../types/deliveryTypes'
import { DeliveryItem } from './DeliveryItem'



export const DeliveryProductsList = (props: IDeliveryProductsList) => {
	return (
		<>
			{props.products.map((item: IProduct) => <DeliveryItem item={item} key={item.id} />)}
		</>
	)
}
