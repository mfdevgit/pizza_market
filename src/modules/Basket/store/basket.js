import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        data: [],
        total: { price: 0, products: 0 }
    },
    reducers: {
        addPizza: (state, action) => {
            const index = state.data.findIndex(
                element => element.id === action.payload.id && element.dough === action.payload.dough && element.size === action.payload.size
            )

            if (index !== -1) {
                state.data[index].count += 1
            } else {
                action.payload.count = 1
                state.data.push(action.payload)
            }
            state.total.price += action.payload.price
            state.total.products += 1
        },
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
            let index
            if (action.payload.category === 'pizzas') {
                index = state.data.findIndex(
                    element => element.id === action.payload.id && element.dough === action.payload.dough && element.size === action.payload.size
                )
            } else {
                index = state.data.findIndex(element => element.id === action.payload.id)
            }

            state.data[index].count += 1
            state.total.price += action.payload.price
            state.total.products += 1
        },
        decrementProduct: (state, action) => {
            let index
            if (action.payload.category === 'pizzas') {
                index = state.data.findIndex(
                    element => element.id === action.payload.id && element.dough === action.payload.dough && element.size === action.payload.size
                )
            } else {
                index = state.data.findIndex(element => element.id === action.payload.id)
            }

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

export const { addProduct, addPizza, incrementProduct, decrementProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer
