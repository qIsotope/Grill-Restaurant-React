import axios from "axios"

export const fetchAvatar = async (email: string | null, callback: (v: string) => void) => {
	const response = await axios.get(`https://62965300810c00c1cb73a6b4.mockapi.io/Avatars?userEmail=${email}`)
	if (response.data.length) {
		callback(response.data[0]?.imageURL)
	} else {
		callback('../images/account.png')
	}
}