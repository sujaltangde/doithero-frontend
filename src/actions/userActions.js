import {loginRequest, loginSuccess, loginFail, 
        registerRequest, registerSuccess, registerFail,
        isLoginRequest, isLoginSuccess, isLoginFail
        } from '../slices/UserSlice' ;
import {toast} from 'react-toastify'
import axios from 'axios'


export const loginUser = (userData) => async (dispatch) =>{
    try{
        dispatch(loginRequest())
        

        const {data} = await axios.post('https://doithero-b.onrender.com/api/v1/loginUser',userData)

        dispatch(loginSuccess())
        localStorage.setItem('accesstoken',data.token)
        toast.success("Login Successful !")
    }catch(err){
        dispatch(loginFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}

export const registerUser = (userData) => async (dispatch) =>{
    try{
        dispatch(registerRequest())
        

        const {data} = await axios.post('https://doithero-b.onrender.com/api/v1/register',userData)

        dispatch(registerSuccess())
        localStorage.setItem('accesstoken',data.token)
        toast.success("Register Successful !")
    }catch(err){
        dispatch(registerFail(err.response.data.message))
        if(err.response.data.message.includes("duplicate")){
            toast.error("User already exists")
        }else{
            toast.error(err.response.data.message)
        }
    }
}

export const IsLogin = () => async (dispatch) =>{
    try{
        dispatch(isLoginRequest())
        
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        }

        const {data} = await axios.get('https://doithero-b.onrender.com/api/v1/isLogin',config)

        dispatch(isLoginSuccess(data))
        
    }catch(err){
        dispatch(isLoginFail(err.response.data.message))
        
    }
}


