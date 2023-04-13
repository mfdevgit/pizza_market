import { configureStore } from '@reduxjs/toolkit'
import { pizzasReducer } from './slices/pizzas'
import { snacksReducer } from './slices/snacks'
import { dessertsReducer } from './slices/desserts'
import { drinksReducer } from './slices/drinks'
import { basketReducer } from '../modules/Basket/index.js'

const store = configureStore({
    reducer: {
        pizzas: pizzasReducer,
        snacks: snacksReducer,
        desserts: dessertsReducer,
        drinks: drinksReducer,
        basket: basketReducer
    }
})

export default store
