import React from 'react'
import TopNavbar from './TopNavbar'
import MainNavbar from './MainNavbar'

function Navbar() {
  return (
    <>
    <div className='hidden lg:block'>
    <TopNavbar/>
    </div>
    <MainNavbar/>
    </>
  )
}

export default Navbar
