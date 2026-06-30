import { useState } from 'react'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './AddUser'
import UpdateUser from './updateUser'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/AddUser' element={<AddUser/>}></Route>
    <Route path='/UpdateUser/:id' element={<UpdateUser/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

    <ToastContainer />

    </>
  )
}

export default App
