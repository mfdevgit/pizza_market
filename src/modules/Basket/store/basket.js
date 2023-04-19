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
            console.log(action.payload)
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
                updateDiscountedPrice(state)
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

const updateTotal = state => {
    state.total.price = state.data.reduce((sum, el) => sum + el.price * el.count, 0)
    state.total.products = state.data.reduce((sum, el) => sum + el.count, 0)
    if (state.total.discount.status === 'loaded') {
        updateDiscountedPrice(state)
    }
}

const updateDiscountedPrice = state => {
    const { price, discount } = state.total

    // eslint-disable-next-line
    switch (discount.data.tech.type) {
        case 'percent':
            if (discount.data.tech.category === 'all') {
                discount.price = Math.floor((price * (100 - discount.data.tech.ratio)) / 100)
            } else {
                let sum = state.data.filter(el => el.category === discount.data.tech.category).reduce((sum, el) => sum + el.count * el.price, 0)
                discount.price = price - Math.floor((sum * discount.data.tech.ratio) / 100)
                return
            }
            break
        case 'fix':
            if (discount.data.tech.category === 'all') {
                discount.price = price - discount.data.tech.ratio
            } else {
                let sum = state.data.filter(el => el.category === discount.data.tech.category).reduce((sum, el) => sum + el.count * el.price, 0)
                if (sum <= discount.data.tech.ratio) {
                    discount.price = price - sum
                } else {
                    discount.price = price - discount.data.tech.ratio
                }
                return
            }
            break
    }
}

export const { addProduct, addPizza, incrementProduct, decrementProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer
