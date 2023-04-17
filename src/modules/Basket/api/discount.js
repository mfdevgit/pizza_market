import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../api/axios'

export const fetchDiscount = createAsyncThunk('basket/fetchDiscount', async code => {
    const { data } = await axios.get(`/pizza_market/discounts/${code}`)
    return data
})
