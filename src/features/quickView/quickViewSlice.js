import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false
}

export const popUpSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    popUpClose: (state) => {
      state.open = false 
    },
    popUpOpen: (state) => {
      state.open = true
    },
    popUpToggle: (state) => {
      state.open = !state.open
    },
  },
})

// Action creators are generated for each case reducer function
export const { popUpClose, popUpToggle, popUpOpen } = popUpSlice.actions
export default popUpSlice.reducer