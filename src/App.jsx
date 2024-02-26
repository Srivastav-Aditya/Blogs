import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/Nopage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import React from 'react'
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,Route,Routes, Navigate,}from "react-router-dom";

function App () {
  return (
    <MyState>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element=
            {<ProtectedRouteForAdmin>
              {<Dashboard />}
            </ProtectedRouteForAdmin>}

          />
          <Route path="/createblog" element=
            {<ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>}
           />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster/>
      </Router>
      </div>
    </MyState>
  )
}

export default App

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "sarthak@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}
