import { configureStore } from '@reduxjs/toolkit'
import { pizzasReducer, snacksReducer, dessertsReducer, drinksReducer } from '../modules/ProductsModule/index'
import { basketReducer } from '../modules/Basket/index.js'
import { settingsReducer } from './slices/settings'

const store = configureStore({
    reducer: {
        pizzas: pizzasReducer,
        snacks: snacksReducer,
        desserts: dessertsReducer,
        drinks: drinksReducer,
        basket: basketReducer,
        settings: settingsReducer
    }
})

export default store
