import { createSlice } from '@reduxjs/toolkit'
import { fetchDrinks } from '../api/data.js'

const drinksSlice = createSlice({
    name: 'drinks',
    initialState: {
        data: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDrinks.pending, state => {
                state.data = []
                state.status = 'loading'
            })
            .addCase(fetchDrinks.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchDrinks.rejected, state => {
                state.data = []
                state.status = 'rejected'
            })
    }
})

export const drinksReducer = drinksSlice.reducer
