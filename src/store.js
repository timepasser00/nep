import { configureStore } from '@reduxjs/toolkit'
import curRed from './reducers/curRed'

const store = configureStore({
    reducer: curRed
})
export default store;