import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { removeThanks } from '../../redux/slices/cartSlice'
import { useAppDispatch } from '../../hooks/redux-hooks'

export const BasketThanks = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		return () => {
			dispatch(removeThanks())
		}
	}, [])

	return (
		<div className="modal-thanksful">
			<img className="modal-thanks-icon" src="images/thanks.jpg" alt="" />
			<div className="modal-submit">
				<Link to='/' className="thanksful-button">
					TO THE HOME
				</Link>
			</div>
		</div>
	)
}
