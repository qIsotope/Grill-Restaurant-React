import React, { useEffect, useState } from 'react'
import { Item, Gallery } from 'react-photoswipe-gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addProduct } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { IDeliveryItem } from '../../types/deliveryTypes'



export const DeliveryItem: React.FC<IDeliveryItem> = (props) => {
	const [success, setSuccess] = useState(false)
	let cartItem = {
		id: props.item.id,
		img: props.item.URL,
		price: props.item.price.replace('$', ''),
		name: props.item.name,
		count: 1,
	}
	const dispatch = useAppDispatch()
	const cartProducts = useAppSelector(state => state.cart.cartProducts)
	const showHideSuccess = () => {
		dispatch(addProduct(cartItem))
		setSuccess(true)
		setTimeout(() => {
			setSuccess(false)
		}, 200);
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartProducts))
	}, [cartProducts])


	return (
		<div className="delivery-item">
			<div className="delivery__item-img overlay-item">
				<Gallery>
					<Item
						original={props.item.URL}
						thumbnail={props.item.URL}
						width="1024"
						height="568"
					>
						{({ ref, open }: any) => (
							<img ref={ref} onClick={open} src={props.item.URL} style={{ cursor: 'pointer' }} />
						)}
					</Item>
				</Gallery>
			</div>
			<div className="delivery__item-info">
				<div className="delivery__item-header">
					<Link to={`/services/${props.item.id}`} className="delivery__item-name">
						{props.item.name}
					</Link>
					<div className="delivery__item-price">
						{props.item.price}
					</div>
				</div>
				<div className="delivery__item-description-container">
					<div className="delivery__item-description">
						<div className="delivery__item-cooking">
							{props.item.cooking}
						</div>
						<div className="delivery__item-bottom">
							<div className="delivery__item-ingridients">
								{props.item.ingridients}
							</div>
						</div>
					</div>
					<div className="delivery__item-basket">
						<a onClick={(e) => e.preventDefault()} href="#" className="delivery-icons">
							{success &&
								<div className="delivery__item-success">
									<FontAwesomeIcon icon={faCheck} />
								</div>}

							{!success &&
								<div className='delivery__item-check'>
									<FontAwesomeIcon onClick={showHideSuccess} icon={faShoppingCart} />
								</div>}
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
