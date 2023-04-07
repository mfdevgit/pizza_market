import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload)
        },
        removeProduct: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.items.splice(index, 1)
            }
        }
    }
})

export const { addProduct, removeProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer
