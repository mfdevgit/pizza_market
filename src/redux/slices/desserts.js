import { createSlice } from '@reduxjs/toolkit'
import { fetchDesserts } from '../../api/data.js'

const dessertsSlice = createSlice({
    name: 'desserts',
    initialState: {
        items: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDesserts.pending, state => {
                state.items = []
                state.status = 'loading'
            })
            .addCase(fetchDesserts.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchDesserts.rejected, state => {
                state.items = []
                state.status = 'rejected'
            })
    }
})

export const dessertsReducer = dessertsSlice.reducer
