import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderLogo = () => {
	return (
		<div className="logo-container">
			<Link to='/'>
				<img className="header-logo" src="./images/logotype.png" alt="#" />
			</Link>
			<div className="logo-info">
				<div className="logo-title" >w
					Grill food
				</div>
				<div className="logo-description" >
					BBQ Restaurant
				</div>
			</div>

		</div>
	)
}
