import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/useAuth'
export const HeaderNavigation = () => {
	const [showMenu, setShowMenu] = useState(false)
	const cartProducts = useAppSelector(state => state.cart.cartProducts)
	const countOfItems = cartProducts.reduce((acc, item) => item.count + acc, 0)
	const { email } = useAuth()

	return (
		<>
			<nav className={showMenu ? 'navigation show-menu' : 'navigation'}>
				<div onClick={() => { setShowMenu(false) }} className="navigation-close">
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<ul className="navigation-list">
					<li onClick={() => { setShowMenu(false) }} className="navigation-item">
						<Link to="/" className="navigation-link">HOME</Link></li>
					<li onClick={() => { setShowMenu(false) }} className="navigation-item">
						<Link to="/about" className="navigation-link">ABOUT</Link>
					</li>
					<li onClick={() => { setShowMenu(false) }} className="navigation-item">
						<Link to="/services" className="navigation-link">SERVICES</Link>
					</li>
					<li onClick={() => { setShowMenu(false) }} className="header-cart"><Link className="navigation-link" to="/basket">MY CART</Link>
						<span className="header-cart-digit">{countOfItems}</span>
					</li>
					<Link onClick={() => { setShowMenu(false) }} to='/account' className="header-reservation">
						<span className="navigation-link">{email}</span>
					</Link>
				</ul>
			</nav>
			<div onClick={() => { setShowMenu(true) }} className="navigation-bars">
				<FontAwesomeIcon icon={faBars} />
			</div>
		</>
	)
}
