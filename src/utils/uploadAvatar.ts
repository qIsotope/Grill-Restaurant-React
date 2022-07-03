import axios from "axios";
import { showLoader, hideLoader } from "../redux/slices/loaderSlice";

export const uploadAvatar = async (dispatch: any, email: string | null, avaURL: string) => {
	dispatch(showLoader())
	const obj = {
		userEmail: email,
		imageURL: avaURL,
	}

	const existingAvatar = await axios.get(`https://62965300810c00c1cb73a6b4.mockapi.io/Avatars?userEmail=${email}`)
	if (existingAvatar.data[0] && Object.keys(existingAvatar.data[0]).length > 0) {
		if (existingAvatar.data[0].imageUrl === avaURL || avaURL === '') {
			dispatch(hideLoader())
			return
		}
		else {
			await axios.delete(`https://62965300810c00c1cb73a6b4.mockapi.io/Avatars/${existingAvatar.data[0].id}`)
			await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/Avatars', obj)
		}
	}
	else {
		await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/Avatars', obj)
	}
	dispatch(hideLoader())
}
