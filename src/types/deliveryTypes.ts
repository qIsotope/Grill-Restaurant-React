
export interface IProduct {
	id: string;
	category: string;
	URL: string;
	name: string;
	price: string;
	cooking: string;
	ingridients: string;
}


export interface IDeliveryProductsList {
	products: IProduct[]
}

export interface IDeliveryItem {
	item: {
		URL: string;
		category: string;
		cooking: string;
		id: string;
		ingridients: string;
		name: string;
		price: string;
	}
}

export interface IDeliveryCategoryItem {
	onClick: () => void
	children: string;
	className: string;
}