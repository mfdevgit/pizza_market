import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        device: 'mobile'
    },
    reducers: {
        setDeviceWidth: (state, action) => {
            state.device = action.payload < 800 ? 'mobile' : 'desktop'
        }
    }
})

export const { setDeviceWidth } = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
