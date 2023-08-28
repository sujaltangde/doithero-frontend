import {getAllTodosRequest, getAllTodosSuccess, getAllTodosFail, createTodoRequest, createTodoSuccess, createTodoFail, editTodoRequest, editTodoSuccess, editTodoFail,
    deleteTodoRequest, deleteTodoSuccess, deleteTodoFail}  from '../slices/TodoSlice' ;
import axios from 'axios'
import {toast} from 'react-toastify'

export const getTodos = () => async (dispatch) => {
    try{
        dispatch(getAllTodosRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("accesstoken")}`
            }
        }

        const {data} = await axios.get("https://doithero-b.onrender.com/api/v1/myTodos",config) ;

        dispatch(getAllTodosSuccess(data.todos))

    }catch(err){
        dispatch(getAllTodosFail(err.response.data.message)) ;
    }
}


export const createTodo = (todoData) => async (dispatch) => {
    try{
        dispatch(createTodoRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("accesstoken")}`
            }
        }

        const {data} = await axios.post("https://doithero-b.onrender.com/api/v1/create", todoData, config) ;

        dispatch(createTodoSuccess())
        dispatch(getTodos())
        toast.success("Todo added !")

    }catch(err){
        dispatch(createTodoFail(err.response.data.message)) ;
    }
}


export const updateTodo = (id,todoData) => async (dispatch) => {
    try{
        dispatch(editTodoRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("accesstoken")}`
            }
        }

        const {data} = await axios.put(`https://doithero-b.onrender.com/api/v1/editTodo/${id}`, todoData, config) ;

        dispatch(editTodoSuccess())
        dispatch(getTodos())
        toast.success("Todo Updated !")
    }catch(err){
        dispatch(editTodoFail(err.response.data.message)) ;
    }
}


export const deleteTodo = (id) => async (dispatch) => {
    try{
        dispatch(deleteTodoRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("accesstoken")}`
            }
        }

        const {data} = await axios.delete(`https://doithero-b.onrender.com/api/v1/deleteTodo/${id}`, config) ;

        dispatch(deleteTodoSuccess())
        dispatch(getTodos())
        toast.success("Todo Deleted !")
    }catch(err){
        dispatch(deleteTodoFail(err.response.data.message)) ;
    }
}