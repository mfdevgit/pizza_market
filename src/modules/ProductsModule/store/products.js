import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../api/data'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        pizzas: {
            data: [],
            status: 'idle'
        },
        snacks: {
            data: [],
            status: 'idle'
        },
        drinks: {
            data: [],
            status: 'idle'
        },
        desserts: {
            data: [],
            status: 'idle'
        }
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state[action.meta.arg].data = []
                state[action.meta.arg].status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state[action.meta.arg].data = action.payload
                state[action.meta.arg].status = 'loaded'
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state[action.meta.arg].data = []
                state[action.meta.arg].status = 'rejected'
            })
    }
})

export const productsReducer = productsSlice.reducer
