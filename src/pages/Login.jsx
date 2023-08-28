import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CgSpinnerTwo } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../actions/userActions'




export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const navigate = useNavigate()
  const {loading, isLogin} = useSelector(state => state.user)
  const dispatch = useDispatch();


  const loginHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    dispatch(loginUser(data))
  }

  useEffect(()=>{

    if(isLogin){
      navigate("/todos")
    }

  },[isLogin])


   

  return (
    <>
       <div className='min-h-screen pt-20 bg-gradient-to-b from-blue-900 to-purple-500' >
        <div className='flex justify-center' >


    

          <form onSubmit={loginHandler} className='flex md:pt-0 pt-7 flex-col md:w-1/3 w-2/3 justify-center gap-3 r' action="">

            <h1 className='text-center text-white text-5xl py-3 font-bold ' >Login</h1>

            <input required onChange={(e) => setEmail(e.target.value)} className='text-black rounded-md outline-none py-1 px-2 placeholder-bold' placeholder='Email' type="text" />

            <input required onChange={(e) => setPass(e.target.value)} className='text-black rounded-md outline-none py-1 px-2 placeholder-bold' placeholder='Password' type="password" />

            <div className='pt-2 flex justify-center w-full items-center flex-col'>
                            <button disabled={loading} className={`bg-blue-500 hover:bg-blue-600 ${loading? "bg-blue-600" :"bg-blue-500" } rounded-md w-full font-semibold text-lg py-1 text-white`}>{loading? <div className='flex justify-center py-1 animate-spin items-center' ><CgSpinnerTwo size={20} /></div> : "Login"}</button>
            </div>

            <p className="text-center md:text-md text-sm text-white font-bold">
              Don't have an account, <Link className="underline text-white" to="/register">Register</Link> here.
            </p>
          </form>

        </div>
      </div> 
    </>
  )
}
