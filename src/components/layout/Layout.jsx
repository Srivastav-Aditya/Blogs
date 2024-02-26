import Navbar from "../navbar/Navbar";
import React from 'react'
import Footer from "../footer/Footer";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className="content min-h-screen">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout