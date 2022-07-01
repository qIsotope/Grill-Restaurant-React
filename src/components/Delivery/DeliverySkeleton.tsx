
export const DeliverySkeleton = () => {
	return (
		<div className="delivery-item">
			<div className="delivery__item-img overlay-item skeleton">
				<div className="gallery-overlay overlay">
					<div className="delivery__item-img-icon overlay-info">
					</div>
				</div>
			</div>
			<div className="delivery__item-info">
				<div className="delivery__item-header skeleton-text">
					<div className="delivery__item-name ">
						STEAK HACHÉ WITH POMMES FRITES
					</div>
					<div className="delivery__item-price">
						$15.50
					</div>
				</div>
				<div className="delivery__item-description-container ">
					<div className="delivery__item-description">
						<div className="delivery__item-cooking skeleton-text">
							Master the art of cooking the perfect sirloin steak for truly tender meat and you'll never
							look back. Serve with chunky chips and salad for a weekend treat
						</div>
						<div className="delivery__item-bottom">
							<div className="delivery__item-ingridients skeleton-text">
								2 fillet steaks,cut from the centre of the fillet 25g butter 1 thyme sprig 1 large or 2
								small shallots, peeled and finely chopped
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
