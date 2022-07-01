import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyMap } from '../MyMap/MyMap'
import { SectionLabel } from '../sectionLabel/SectionLabel'
export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-info">
						<SectionLabel title={'CONTACTS'} subtitle={'Adress'} white />
						<div className="footer-contacts">
							<div className="footer-adress">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
								4239 Lapeer Rd, Port Hurons, MI 48060
							</div>
							<div className="footer-phone">
								<FontAwesomeIcon icon={faPhone} /> +1 (800) 478-42-51
							</div>
							<div className="footer-hours">
								<FontAwesomeIcon icon={faClock} /> We are open Mn-Fr: 10am - 8pm
							</div>
							<div className="footer-socials">
								<a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
								<a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
								<a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
								<a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
							</div>
						</div>
					</div>

					<div className="footer-map">
						<MyMap />
					</div>
				</div>
			</div>
		</footer >
	)
}
