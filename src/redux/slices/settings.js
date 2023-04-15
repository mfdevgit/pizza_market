import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        deviceType: 'mobile',
        isBasketOpen: false,
        isSidebarOpen: false
    },
    reducers: {
        setDeviceType: (state, action) => {
            state.deviceType = action.payload
        },
        setIsBasketOpen: (state, action) => {
            state.isBasketOpen = action.payload
        },
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload
        }
    }
})

export const { setDeviceType, setIsBasketOpen, setIsSidebarOpen } = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
