import React from 'react'
import { BasketEmpty } from '../components/Basket/BasketEmpty'
import { BasketProducts } from '../components/Basket/BasketProducts'
import { useAppSelector } from '../hooks/redux-hooks'
export const BasketPage: React.FC = () => {
	const products = useAppSelector(state => state.cart.cartProducts)
	return (
		<section className="about about-active">
			<div className="container">
				<div className="modal">
					<div className="modal-wrapper">
						<div className="modal-body">
							{products.length
								? <BasketProducts />
								: <BasketEmpty />}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
