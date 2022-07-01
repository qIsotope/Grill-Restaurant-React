import React from 'react'
import { SectionLabel } from '../sectionLabel/SectionLabel'
import { TeamSlider } from './TeamSlider'
export const Team = () => {

	return (
		<section className="team">
			<div className="container">
				<SectionLabel title='OUR TEAM' subtitle={'Meet Our Team'} />
				<TeamSlider />
			</div>
		</section>
	)
}
