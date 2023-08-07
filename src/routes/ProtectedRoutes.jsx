import React from 'react'

const token = JSON.parse(localStorage.getItem("token"))

export const ProtectedRoutes = ({children}) => {
  // return token ? {children} : <Login 
}
