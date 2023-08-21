import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../services'
// import { logout } from '../../services/authService'
import { useEffect } from 'react'
import { getUser } from '../../services'
import { useState } from 'react'

export const UserLoggedInDropdown = ({ setLogin }) => {

  const navigate = useNavigate()

  const [user,setUser] = useState({})

  // const email = useSelector(state => state.dataState.email)
  // const name = useSelector(state => state.dataState.name)

  useEffect(()=>{
    async function fetchData(){
      const user= await getUser()
      setUser(user)
    }
      fetchData()
  },[])


  const handleLogout = () => {
    logout()
    setLogin(false)
    navigate("/")
  }

  const handleGoToCart=()=>{
    navigate("/cart")
    setLogin(false)
  }



  return (
    <div id="dropdownAvatar" className="z-10 text-center absolute left-[-70px] top-[43px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div>{user.fName}</div>
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul className="py-2  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li onClick={handleGoToCart} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          My Cart
        </li>
        <li className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Wishlist
        </li>
        <li className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Dashboard
        </li>
      </ul>
      <div className="py-2">
        <li onClick={handleLogout} className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</li>
      </div>
    </div>
  )
}
