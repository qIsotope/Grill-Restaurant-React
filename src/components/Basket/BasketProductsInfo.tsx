import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ICartItem } from '../../types/basketTypes';
import { BasketItem } from './BasketItem'

interface IBasketProductsInfo {
	sumOfOrder: number;
	cartProducts: ICartItem[]
}

export const BasketProductsInfo = ({ cartProducts, sumOfOrder }: IBasketProductsInfo) => {
	return (
		<>
			<div className="modal-label">
				Order
			</div>
			<div className="modal-products">
				<TransitionGroup className="todo-list">
					{cartProducts.map((product) => (
						<CSSTransition
							key={product.id}
							timeout={500}
							classNames="item">
							<BasketItem item={product} />
						</CSSTransition>
					))}
				</TransitionGroup>

			</div>
			<div className="modal__products-sum">
				<span>Total:</span>
				<span className="modal-value">{sumOfOrder.toFixed(2)}</span>
				<span className="modal-currency">$</span>
			</div>
		</>
	)
}
