import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        loading: false,
        allTodos: [],
        error: null,
    },
    reducers:{
        getAllTodosRequest:(state)=>{
            state.loading = false ;
        },
        getAllTodosSuccess:(state, action)=>{
            state.loading = true ;
            state.allTodos = action.payload
        },
        getAllTodosFail:(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        },

        clearTodos:(state)=>{
            state.allTodos = []
        },
        
        createTodoRequest:(state)=>{
            state.loading = false ;
        },
        createTodoSuccess : (state)=>{
            state.loading = false ;
        },
        createTodoFail:(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        },


        editTodoRequest: (state)=>{
            state.loading = false
        },
        editTodoSuccess: (state)=>{
            state.loading = false
        },
        editTodoFail: (state, action)=>{
            state.loading = false ;
            state.error = action.payload
        },

        deleteTodoRequest: (state)=>{
            state.loading = false
        },
        deleteTodoSuccess: (state)=>{
            state.loading = false
        },
        deleteTodoFail: (state, action)=>{
            state.loading = false ;
            state.error = action.payload
        },


    }
})

export const {getAllTodosRequest, getAllTodosSuccess, getAllTodosFail, createTodoRequest, createTodoSuccess, createTodoFail, clearTodos,
editTodoRequest, editTodoSuccess, editTodoFail,
deleteTodoRequest, deleteTodoSuccess, deleteTodoFail
} = todoSlice.actions ;

export default todoSlice.reducer    