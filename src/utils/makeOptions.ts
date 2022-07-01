
export const makeOptions = (data: any) => {
	const optionsForSelect = data.map((value: any) => {
		const object = {
			value: value.Description,
			label: value.Description
		}
		return object
	})
	return optionsForSelect
} 