import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from '../../api/data.js'

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        data: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPizzas.pending, state => {
                state.data = []
                state.status = 'loading'
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchPizzas.rejected, state => {
                state.data = []
                state.status = 'rejected'
            })
    }
})

export const pizzasReducer = pizzasSlice.reducer
