import { createSlice } from '@reduxjs/toolkit'
import { fetchDiscount } from '../api/discount.js'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        data: [],
        total: { products: 0, price: 0, discount: { data: false, status: 'loading' } }
    },
    reducers: {
        addProduct: (state, action) => {
            const index = findProductIndex(state.data, action.payload)
            if (index !== -1) {
                state.data[index].count += 1
            } else {
                action.payload.count = 1
                state.data.push(action.payload)
            }
            updateTotal(state)
        },
        incrementProduct: (state, action) => {
            const index = findProductIndex(state.data, action.payload)
            if (index !== -1) {
                state.data[index].count += 1
                updateTotal(state)
            }
        },
        decrementProduct: (state, action) => {
            const index = findProductIndex(state.data, action.payload)
            if (index !== -1) {
                if (action.payload.count === 1) {
                    state.data.splice(index, 1)
                } else {
                    state.data[index].count -= 1
                }
                updateTotal(state)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDiscount.pending, state => {
                state.total.discount.status = 'loading'
            })
            .addCase(fetchDiscount.fulfilled, (state, action) => {
                state.total.discount.data = action.payload
                state.total.discount.status = 'loaded'
                state.total.discount.price = setDiscountedPrice(state.total.price, action.payload.tech)
            })
            .addCase(fetchDiscount.rejected, state => {
                state.total.discount.status = 'rejected'
            })
    }
})

const findProductIndex = (data, payload) => {
    if (payload.category === 'pizzas') {
        return data.findIndex(element => element.id === payload.id && element.dough === payload.dough && element.size === payload.size)
    } else {
        return data.findIndex(element => element.id === payload.id)
    }
}

const setDiscountedPrice = (current, tech) => {
    switch (tech.type) {
        case 'percent':
            return Math.floor((current * (100 - tech.ratio)) / 100)
        case 'fixed':
            break
    }
}

const updateTotal = state => {
    state.total.price = state.data.reduce((sum, el) => sum + el.price * el.count, 0)
    state.total.products = state.data.reduce((sum, el) => sum + el.count, 0)
}

export const { addProduct, addPizza, incrementProduct, decrementProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer
