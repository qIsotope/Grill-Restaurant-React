import { useAuth } from '../hooks/useAuth';
import axios from "axios"



export const fetchItems = async (URL: string, callback: any, email: string | null = '', filter?: boolean,) => {
	const response = await axios.get(URL)
	if (filter) {
		callback(response.data.filter(((o: { userEmail: string | null }) => o.userEmail === email)))
	}
	else {
		callback(response.data)
	}
}

