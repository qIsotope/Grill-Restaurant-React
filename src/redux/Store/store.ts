import { configureStore } from '@reduxjs/toolkit'
import product from '../slices/productSlice'
import cart from '../slices/cartSlice'
import user from '../slices/userSlice'
import loader from '../slices/loaderSlice'


export const store = configureStore({
	reducer: {
		product,
		cart,
		user,
		loader,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>