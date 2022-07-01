
import 'photoswipe/dist/photoswipe.css'
import { Item } from 'react-photoswipe-gallery'

interface IGalleryItem {
	name1: string;
	imgUrl1: string;
	name2: string;
	imgUrl2: string;
}

export const GalleryItem = ({ name1, imgUrl1, name2, imgUrl2 }: IGalleryItem) => {
	return (
		<div className="gallery__slider-item">
			<div className="gallery-item  overlay-item">
				<Item
					original={imgUrl1}
					thumbnail={imgUrl1}
					width="1024"
					height="568"
					caption={name1}
				>
					{({ ref, open }: any) => (
						<img ref={ref} onClick={open} src={imgUrl1} style={{ cursor: 'pointer' }} />
					)}
				</Item>
			</div>
			<div className="gallery-item overlay-item">
				<Item
					original={imgUrl2}
					thumbnail={imgUrl2}
					width="1024"
					height="568"
					caption={name2}
				>
					{({ ref, open }: any) => (
						<img ref={ref} onClick={open} src={imgUrl2} style={{ cursor: 'pointer' }} />
					)}
				</Item>
			</div>
		</div>
	)
}
