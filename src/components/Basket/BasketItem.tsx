import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { minusProduct, plusProduct, removeProduct } from '../../redux/slices/cartSlice'
import { IBasketItem } from '../../types/basketTypes'



export const BasketItem = ({ item }: IBasketItem) => {
	const dispatch = useAppDispatch()
	const priceForItem = item && (+item.price * item.count)
	return (
		<div className="modal__product-item">
			<div className="product__item-img">
				<img src={item.img} alt="" />
			</div>
			<div className="product__item-info">
				<div className="product__item-top">
					<Link to={`/services/${item.id}`} className="product__item-name">{item.name}</Link>
					<div className="product__item-price">{priceForItem.toFixed(2)}<span className="modal-currency">$</span></div>
				</div>
				<div className="product__item-bot">
					<div className="product__item-amount">
						<span onClick={() => dispatch(minusProduct(item.id))} className="product__item-minus"></span>
						<span className="product__item-number">{item.count}</span>
						<span onClick={() => dispatch(plusProduct(item.id))} className="product__item-plus"></span>
					</div>
					<div onClick={() => dispatch(removeProduct(item.id))} className="product__item-remove">
						<span className="item__remove-icon">
							<i className="far fa-trash-alt"></i>
						</span>
						<span className="item__remove-text">Delete</span>
					</div>
				</div>
			</div>
		</div>
	)
}
