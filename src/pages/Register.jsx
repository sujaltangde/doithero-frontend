import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from '../actions/userActions'
import {CgSpinnerTwo} from 'react-icons/cg'



export const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {loading, isLogin} = useSelector(state => state.user)


    
    const registerHandler = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            password
        }
        
        dispatch(registerUser(data))
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
                  


                    <form onSubmit={registerHandler} className='flex md:pt-0 pt-7 flex-col md:w-1/3 w-2/3 justify-center gap-3 r' action="">

                        <h1 className='text-center text-white text-5xl py-3 font-bold ' >Register</h1>

                        <input required onChange={(e) => { setName(e.target.value) }} className='text-black rounded-md outline-none py-1 px-2 placeholder-bold' placeholder='Name' type="text" />

                        <input required onChange={(e) => { setEmail(e.target.value) }} className='text-black rounded-md outline-none py-1 px-2 placeholder-bold' placeholder='Email' type="email" />

                        <input required onChange={(e) => { setPass(e.target.value) }} className='text-black rounded-md outline-none py-1 px-2 placeholder-bold' placeholder='Password' type="password" />

                        <div className='pt-2 flex justify-center w-full items-center flex-col'>
                            <button disabled={loading} className={`bg-blue-500 hover:bg-blue-600 ${loading? "bg-blue-600" :"bg-blue-500" } rounded-md w-full font-semibold text-lg py-1 text-white`}>{loading? <div className='flex justify-center py-1 animate-spin items-center' ><CgSpinnerTwo size={20} /></div> : "Register"}</button>
            </div>

                        <p className='text-center md:text-md text-sm text-white font-bold'>Already have a account, <Link className='underline text-white' to="/login">Login</Link > here.</p>

                    </form>

                </div>
            </div>

        </>
    )
}
