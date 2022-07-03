import axios from "axios"
import { showLoader, hideLoader } from "../redux/slices/loaderSlice"



export const deleteItem = async (id: string, type: string, setItems: any, email: string | null, dispatch: any) => {
	dispatch(showLoader())
	await axios.delete('https://62965300810c00c1cb73a6b4.mockapi.io/orders/' + id)
	const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/orders?type=' + type)
	setItems(response.data.filter((r: { userEmail: string | null }) => r.userEmail === email))
	dispatch(hideLoader())
}


