import { useEffect } from 'react'
import { BasketProductsInfo } from './BasketProductsInfo'
import { BasketForm } from './BasketForm'
import { useAppSelector } from '../../hooks/redux-hooks'


export const BasketProducts = () => {
	const cartProducts = useAppSelector(state => state.cart.cartProducts)
	const sumOfOrder = cartProducts.reduce((acc, product) => +product.price * +product.count + acc, 0)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartProducts))
	}, [cartProducts])

	return (
		<div className="modal-default ">
			<BasketProductsInfo cartProducts={cartProducts} sumOfOrder={sumOfOrder} />
			<BasketForm cartProducts={cartProducts} sumOfOrder={sumOfOrder} />
		</div>
	)
}
