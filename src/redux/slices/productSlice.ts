import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IProduct } from '../../types/deliveryTypes'


interface IProductSlice {
	isLoading: boolean,
	product: IProduct[],
	status: 'loading' | 'resolved' | 'rejected',
	error: any,
}

const initialState: IProductSlice = {
	isLoading: false,
	product: [],
	status: 'loading',
	error: null,
}
export const fetchProducts = createAsyncThunk<IProduct[], string>(
	'product/fetchProducts',
	async (URL, { rejectWithValue }) => {
		try {
			const response = await axios.get<IProduct[]>(URL)
			if (response.status !== 200) {
				throw new Error('Server error')
			}
			return (response.data)
		}
		catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const productSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.status = 'resolved'
			state.product = action.payload
		})
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		})
	}

})

export const { setIsLoading } = productSlice.actions

export default productSlice.reducer