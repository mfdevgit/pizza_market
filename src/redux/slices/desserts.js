import { createSlice } from '@reduxjs/toolkit'
import { fetchDesserts } from '../../api/data.js'

const dessertsSlice = createSlice({
    name: 'desserts',
    initialState: {
        data: [],
        status: 'loading'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDesserts.pending, state => {
                state.data = []
                state.status = 'loading'
            })
            .addCase(fetchDesserts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'loaded'
            })
            .addCase(fetchDesserts.rejected, state => {
                state.data = []
                state.status = 'rejected'
            })
    }
})

export const dessertsReducer = dessertsSlice.reducer
