import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../api/axios.js'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async category => {
    const { data } = await axios.get(`/market/products/${category}`)
    data.map(element => (element.category = category))
    return data
})
