import { useEffect } from 'react'
import { updateShowLoginForm } from '../store/propsSlice'
import { useDispatch } from 'react-redux'
import { ProductsPage } from '../pages'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("token"))

  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      dispatch(updateShowLoginForm(true));
      document.body.style.overflow = "hidden"
    }
  }, [dispatch, token]);

  return token ? children : <Navigate to="/products" />
}
