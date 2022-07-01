import { SectionLabel } from '../sectionLabel/SectionLabel'
import { AboutArticles } from './AboutArticles'
import { AboutStat } from './AboutStat'
export const AboutText = () => {
	return (
		<div className="about-text">
			<SectionLabel title={'ABOUT US'} subtitle={'Few words about us'} />
			<AboutArticles />
			<AboutStat />
		</div>
	)
}
