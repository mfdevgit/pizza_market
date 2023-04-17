import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from '../modules/ProductsModule/index.js'
import { basketReducer } from '../modules/Basket/index.js'
import { settingsReducer } from './slices/settings'

const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer,
        settings: settingsReducer
    }
})

export default store
