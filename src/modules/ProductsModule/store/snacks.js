import { createSlice } from '@reduxjs/toolkit'
import { fetchSnacks } from '../api/data.js'

const snacksSlice = createSlice({
    name: 'snacks',
    initialState: {
        data: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSnacks.pending, state => {
                state.data = []
                state.status = 'loading'
            })
            .addCase(fetchSnacks.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchSnacks.rejected, state => {
                state.data = []
                state.status = 'rejected'
            })
    }
})

export const snacksReducer = snacksSlice.reducer
