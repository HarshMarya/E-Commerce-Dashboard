import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TfiShoppingCartFull } from "react-icons/tfi";
import NavLogout from './NavLogout';


function Nav() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <>
      <header className='flex justify-between px-4 py-2 items-center bg-teal-200'>
        <Link to='/'>
          <TfiShoppingCartFull className='text-5xl' />
        </Link>
        {
          auth ?
            <ul className='flex justify-between gap-4'>
              <li><Link to='/'> Home</Link></li>
              <li><Link to='/add-product'>Add Product</Link></li>
              <li><Link to='/update-product'>Update Product</Link></li>
              <li><Link to='/profile'>Profile ({JSON.parse(auth).name})</Link></li>
              <li><Link to='/signup' onClick={logout}>Logout</Link></li>
            </ul>
            :
            <ul className='flex gap-4'>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/login'>login</Link></li>
            </ul>
        }
      </header>
    </>
  )
}

export default Nav
