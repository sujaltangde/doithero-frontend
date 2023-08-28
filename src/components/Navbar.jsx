import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { IsLogin } from '../actions/userActions'
import {toast} from 'react-toastify'
import { clearTodos } from '../slices/TodoSlice';


export const Navbar = () => {


    const [toggle, setToggle] = useState(null);
    const { isLogin } = useSelector(state => state.user) 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = ()=>{
        localStorage.removeItem('accesstoken') ;
        navigate('/') ;
        dispatch(IsLogin()) ;
        setToggle(!toggle)
        dispatch(clearTodos())
        toast.success("LogOut Successful !")
    }

    return (
        <>


            <nav>
                <div>
                    <ul className='flex py-3 fixed min-w-full bg-gray-900 text-xl text-white font-semibold md:justify-between z-10 justify-start md:px-9 px-3'>
                        <Link to="/" className='flex md:gap-1 gap-1 '>
                            <span> <img src="/images/ic.png" className='md:h-8 h-7' alt="" /> </span>
                            <p className='text-center  text-2xl font-bold' >DoItHero</p>
                        </Link>
                        <div className='md:flex font-semibold hidden gap-9'>
                            <Link className='font-bold hover:text-orange-400' to="/" >Home</Link>
                            <Link className='font-bold hover:text-orange-400' to="/todos" >Todo's</Link>
                            <Link className='font-bold hover:text-orange-400' to="/about" >About</Link>
                        </div>
                        <div className='md:flex  hidden gap-7' >

                             { 
                               
                               !isLogin?   <>
                                        <Link className='font-bold hover:text-orange-400' to="/login">Login</Link>
                                        <Link className='font-bold hover:text-orange-400' to="/register">Register</Link>
                                    </>
                                :
                                    <>
                                        <button className='font-bold hover:text-orange-400' onClick={logOut} >Logout</button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </>
                              
                            } 

                        </div>

                        <div className='absolute md:top-3 top-4 right-3 md:hidden flex '>
                            {
                                toggle ? (
                                    <RxCross2 size={30} onClick={() => { setToggle(!toggle) }} className='cursor-pointer' />) :
                                    (<FaBars onClick={() => { setToggle(!toggle) }} size={28} className='cursor-pointer' />)
                            }
                        </div>

                    </ul>
                    {
                        <div className={`${toggle ? 'flex' : 'hidden'} `}>
                            <div className='md:hidden min-h-screen opacity-95 bg-gray-900 text-white z-10  fixed top-14 w-full py-4 text-2xl font-sans border border-t-2 border-b-0 border-x-0 text-center gap-12 pt-14 flex flex-col'>

                                <Link onClick={() => setToggle(!toggle)} className=' ' to="/" >Home</Link>
                                <Link onClick={() => setToggle(!toggle)} className=' ' to="/todos" >Todo's</Link>
                                <Link onClick={() => setToggle(!toggle)} className=' ' to="/about" >About</Link>

                                {
                                    !isLogin ?
                                        <>
                                            <Link onClick={() => setToggle(!toggle)} className=' ' to="/login">Login</Link>
                                            <Link onClick={() => setToggle(!toggle)} className=' -' to="/register" >Register</Link>
                                        </>
                                       :
                                         <button onClick={logOut} className=' ' >Logout</button>
                                }

                            </div>
                        </div>
                    }

                </div>
            </nav>


        </>
    )
}
