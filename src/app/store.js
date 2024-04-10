import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from "../features/api/apiSlice"
import {usersApi} from "../features/users/userApi"
import orderProductSlice from '../features/orderProduct/orderProductSlice'
import cartHandler from '../features/cartHandler/cartHandler'
import productSlice from "../features/product/productSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    usersApi,
    order:orderProductSlice,
    cartHandler,
    productSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})
