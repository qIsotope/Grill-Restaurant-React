import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ITeamItem {
	imgUrl: string;
	name: string;
	proffesion: string;
}


export const TeamItem = ({ imgUrl, name, proffesion }: ITeamItem) => {
	return (
		<div className="slider-item overlay-item">
			<img src={imgUrl} alt="" />
			<div className="slider-overlay overlay">
				<div className="slider__item-info overlay-info">
					<div className="slider__item-socials">
						<a href="#">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a href="#">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="#">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="#">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>
					<div className="slider__item-name overlay-name">{name}</div>
					<div className="slider__item-proffesion overlay-description">{proffesion}</div>
				</div>
			</div>
		</div>
	)
}
