import React from 'react'

interface IAdvantageItem {
	text: string;
	imgUrl: string;
}

export const AdvantageItem = ({ text, imgUrl }: IAdvantageItem) => {
	return (
		<div className="advantage-item">
			<div className="advantage-img">
				<img src={imgUrl} alt="#" />
			</div>
			<div className="advantage-info">
				{text}
			</div>
		</div>
	)
}
