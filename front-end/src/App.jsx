import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductsListing from './components/ProductsListing'
import AddProduct from './components/AddProduct'
import Logout from './components/Logout'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import PrivateRoute from './components/PrivateRoute'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/update-product' element={<ProductsListing />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
