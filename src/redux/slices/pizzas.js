import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from '../../api/data.js'

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        items: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPizzas.pending, state => {
                state.items = []
                state.status = 'loading'
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchPizzas.rejected, state => {
                state.items = []
                state.status = 'rejected'
            })
    }
})

export const pizzasReducer = pizzasSlice.reducer
