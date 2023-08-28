import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Todos } from './pages/Todos'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {IsLogin} from './actions/userActions'
import {useDispatch} from 'react-redux'


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    const LogOrNot = () => {
      dispatch(IsLogin());
    }
    LogOrNot()
  }, []);
  

  return (
    <>
        <Navbar/>
        <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />              
              <Route path="/register" element={<Register/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/todos" element={<Todos/>} />

              
        </Routes>
        

        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-14 font-bold  "

      />
        <Footer/>
        
        
    </>
  )
}

export default App
