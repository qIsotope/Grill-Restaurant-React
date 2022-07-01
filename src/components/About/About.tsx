import { AboutImgs } from './AboutImgs'
import { AboutText } from './AboutText'

export const About = () => {
	return (
		<section className="about about-active">
			<div className="container">
				<div className="about-us">
					<AboutText />
					<AboutImgs />
				</div>
			</div>
		</section>
	)
}
