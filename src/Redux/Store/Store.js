import { configureStore } from '@reduxjs/toolkit'
import reducer from '../Reducer/index'

const store = configureStore(reducer())
export default store