import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    let token = localStorage.getItem("token")
  return token ? <Navigate to="/home" replace/> : children
}

export default PublicRoute
