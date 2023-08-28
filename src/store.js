import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import todoReducer from './slices/TodoSlice'


export const store = configureStore({
	reducer:{
		user: userReducer,
		todo: todoReducer		
	}
})
