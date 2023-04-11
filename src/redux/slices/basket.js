import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        data: [],
        total: { price: 0, products: 0 }
    },
    reducers: {
        addProduct: (state, action) => {
            const index = state.data.findIndex(element => element.id === action.payload.id)
            if (index !== -1) {
                state.data[index].count += 1
            } else {
                action.payload.count = 1
                state.data.push(action.payload)
            }
            state.total.price += action.payload.price
            state.total.products += 1
        },
        incrementProduct: (state, action) => {
            const index = state.data.findIndex(element => element.id === action.payload.id)
            state.data[index].count += 1

            state.total.price += action.payload.price
            state.total.products += 1
        },
        decrementProduct: (state, action) => {
            const index = state.data.findIndex(element => element.id === action.payload.id)

            if (action.payload.count === 1) {
                state.data.splice(index, 1)
            } else {
                state.data[index].count -= 1
            }

            state.total.price -= action.payload.price
            state.total.products -= 1
        }
    }
})

const updateTotal = state => {
    state.total.price += state.data.reduce((sum, el) => el.count * el.price + sum, 0)
    state.total.products = state.data.reduce((sum, el) => el.count + sum, 0)
}

export const { addProduct, incrementProduct, decrementProduct, removeProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer
