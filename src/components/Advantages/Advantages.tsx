import { advantageData } from '../../data/data'
import { AdvantageItem } from './AdvantageItem'

export const Advantages = () => {



	return (
		<section className="about">
			<div className="container">
				<div className="about-advantages">
					<div className="about-row">
						{advantageData.map(a => <AdvantageItem key={a.imgUrl} text={a.text} imgUrl={a.imgUrl} />)}
					</div>
				</div>
			</div>
		</section>
	)
}
