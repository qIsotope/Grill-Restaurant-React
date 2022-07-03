export const getURLforAva = (option1: Blob, option2: string) => {
	if (option1) {
		return URL.createObjectURL(option1)
	} else if (option2) {
		return option2
	} else {
		return ''
	}
}