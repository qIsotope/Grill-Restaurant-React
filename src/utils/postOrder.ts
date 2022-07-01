import axios from "axios"

export interface IPostOrder {
	date?: string
	email: string
	items?: string
	name: string
	phone: string
	price?: number
	type?: string
	userEmail?: string | null
}


export const postOrder = async (values: IPostOrder) => {
	await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/orders', values)
}