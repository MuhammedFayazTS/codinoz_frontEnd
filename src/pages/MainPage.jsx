import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainPage