import { createSlice } from '@reduxjs/toolkit'
import { fetchSnacks } from '../../api/data.js'

const snacksSlice = createSlice({
    name: 'snacks',
    initialState: {
        items: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSnacks.pending, state => {
                state.items = []
                state.status = 'loading'
            })
            .addCase(fetchSnacks.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchSnacks.rejected, state => {
                state.items = []
                state.status = 'rejected'
            })
    }
})

export const snacksReducer = snacksSlice.reducer
