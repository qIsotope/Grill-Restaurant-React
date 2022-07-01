export const convertDate = (value: Date) => {
	const index = value.toLocaleString().indexOf(',')
	return value.toLocaleString().substring(0, index)
}