import { createSlice } from '@reduxjs/toolkit'
import { fetchDrinks } from '../../api/data.js'

const drinksSlice = createSlice({
    name: 'drinks',
    initialState: {
        items: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDrinks.pending, state => {
                state.items = []
                state.status = 'loading'
            })
            .addCase(fetchDrinks.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchDrinks.rejected, state => {
                state.items = []
                state.status = 'rejected'
            })
    }
})

export const drinksReducer = drinksSlice.reducer
