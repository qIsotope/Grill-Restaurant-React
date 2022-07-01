

export const reset = async (e: any, func: any, dispatch: any) => {
	dispatch(func())
	e.resetForm()
}