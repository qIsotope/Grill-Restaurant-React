import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

export const HeaderTop = () => {
	return (
		<div className="header-top">
			<div className="header-contacts">
				<span className="header-adress-container">
					<FontAwesomeIcon icon={faMapMarkerAlt} />
					<span className="header-adress">2900 Lapeer Rd, Port Hurons, MI 49070</span>
				</span> <FontAwesomeIcon icon={faPhone} />
				<span className="header-number">+1 (800) 478-42-51</span>
			</div>
			<div className="header-socials">
				<a href="#">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href="#">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
				<a href="" className=""><FontAwesomeIcon icon={faYoutube} /></a>
			</div>
		</div>
	)
}
