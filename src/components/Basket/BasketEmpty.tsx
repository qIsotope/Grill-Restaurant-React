import { useAppSelector } from '../../hooks/redux-hooks'
import { BasketThanks } from './BasketThanks'
export const BasketEmpty = () => {
	const thanks = useAppSelector(state => state.cart.thanks)

	return (
		<>
			{
				thanks
					? <BasketThanks />
					: <BasketNoItem />
			}
		</>
	)
}

const BasketNoItem = () => {
	return (
		<div className="modal-empty">
			<div className="modal__empty-icon">
				<img src="../images/empty.png" alt="" />
			</div>
			<div className="modal__empty-title">Your cart is empty</div>
			<div className="modal__empty-subtitle">Add the items you want to place an order</div>
		</div>
	)
}
