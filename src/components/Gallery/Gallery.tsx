import React from 'react'
import { SectionLabel } from '../sectionLabel/SectionLabel'
import { GallerySlider } from './GallerySlider'
import { Gallery } from 'react-photoswipe-gallery'
export const MyGallery = () => {

	return (
		<section className="gallery">
			<div className="container">
				<SectionLabel title={'GALLERY'} subtitle={'Few words about us'} />
			</div>
			<Gallery withCaption>
				<GallerySlider />
			</Gallery>
		</section>
	)
}
