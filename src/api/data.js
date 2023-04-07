import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from './axios.js'

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async () => {
    const { data } = await axios.get('/pizza_market/pizzas')
    return data
})
export const fetchSnacks = createAsyncThunk('snacks/fetchSnacks', async () => {
    const { data } = await axios.get('/pizza_market/snacks')
    return data
})
export const fetchDesserts = createAsyncThunk('desserts/fetchDesserts', async () => {
    const { data } = await axios.get('/pizza_market/desserts')
    return data
})
export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async () => {
    const { data } = await axios.get('/pizza_market/drinks')
    return data
})
