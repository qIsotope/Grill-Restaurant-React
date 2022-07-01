import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../../types/basketTypes';

interface ICartSlice {
	cartProducts: ICartItem[];
	thanks: boolean;
}

const checkLocalStorage = () => {
	const data = localStorage.getItem('cart')
	return data ? JSON.parse(data) : []
}

const initialState: ICartSlice = {
	cartProducts: checkLocalStorage(),
	thanks: false,
}


export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<ICartItem>) {
			const currentItem = state.cartProducts.find(p => p.id === action.payload.id)
			if (currentItem) {
				currentItem.count++
			}
			else {
				state.cartProducts = [...state.cartProducts, action.payload]
			}
		},
		minusProduct(state, action: PayloadAction<string>) {
			if (state.cartProducts.length === 1) {
				localStorage.removeItem('cart')
			}
			const currentItem = state.cartProducts.find(p => p.id === action.payload)
			if (currentItem) {
				if (currentItem.count === 1) {
					state.cartProducts = [...state.cartProducts.filter(p => p.id !== action.payload)]
				}
				else {
					currentItem.count--
				}
			}
		},
		plusProduct(state, action: PayloadAction<string>) {
			const currentItem = state.cartProducts.find(p => p.id === action.payload)
			if (currentItem) {
				currentItem.count++
			}
		},
		removeProduct(state, action: PayloadAction<string>) {
			if (state.cartProducts.length === 1) {
				localStorage.removeItem('cart')
			}
			state.cartProducts = [...state.cartProducts.filter(p => p.id !== action.payload)]
		},
		removeThanks(state) {
			state.thanks = false
		},
		showThanks(state) {
			state.thanks = true

		},
		clearCart(state) {
			state.cartProducts = []
			localStorage.removeItem('cart')
		}

	},


})

export const { addProduct, minusProduct, plusProduct, removeProduct, removeThanks, showThanks, clearCart } = cartSlice.actions

export default cartSlice.reducer