import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const UserLayout = (props) => {
  return (
    <>
    <Navbar />
    {props.children}
    <Footer />
    </>
  )
}

export default UserLayout