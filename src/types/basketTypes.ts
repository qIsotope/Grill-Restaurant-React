export interface ISelectOptions {
	value: string,
	label: string,
}

export interface ISuggestions {
	AddressDeliveryAllowed: boolean,
	Area: string
	DeliveryCity: string
	MainDescription: string
	ParentRegionCode: string
	ParentRegionTypes: string
	Present: string
	Ref: string
	Region: string
	RegionTypes: string
	RegionTypesCode: string
	SettlementTypeCode: string
	StreetsAvailability: true
	Warehouses: number
}
export interface Ifunc {
	(e: React.ChangeEvent<HTMLInputElement> | string): void;
}

export interface IBasketItem {
	item: {
		count: number
		id: string;
		img: string;
		name: string;
		price: string;
	}
}

export interface ICartItem {
	id: string;
	img: string;
	price: string;
	name: string;
	count: number,
}

export interface IBasketForm {
	sumOfOrder: number;
	cartProducts: ICartItem[]
}