import React from 'react'

export const Preloader: React.FC = () => {
	return (
		<div className="preloader-container">
			<div className="preloader-body hvr-pulse">
				<div className="preloader">
					<img className="preloader-gif" src="../images/free-icon-food-serving-3081347.png" alt="" />
				</div>
				<div className="preloader-title">
					Loading...
				</div>
			</div>
		</div>
	)
}
