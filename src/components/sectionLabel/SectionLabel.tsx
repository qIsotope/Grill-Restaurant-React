import React from 'react'

interface ISeactionLabel {
	title: string;
	subtitle: string;
	white?: boolean;
}



export const SectionLabel = ({ title, subtitle, white }: ISeactionLabel) => {
	return (
		<div className="reviews-label ">
			<div className={white ? "subtitle white" : "subtitle"}>
				{subtitle}
			</div>
			<div className={white ? "title white" : "title"}>
				{title}
			</div>
		</div>
	)
}
